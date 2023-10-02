import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  ModalHeader,
  Input,
  Heading,
  Image,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useRouter } from "next/router";

import { authActions, renderActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { clickFrameActions } from "../../store";
import axios from "axios";

// import saveAs from "file-saver";
const saveAs = require("file-saver");

import { loadStripe } from "@stripe/stripe-js";
// import { redirect } from "next/dist/server/api-utils";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(
  "pk_test_51L4RxSSH6atIy7JgWz6kDcjTvpC8HfcWc07kQ1AbNhNWbmUxNgtNsyO9GAsIGnOAFLHV04mj4fReWYBzZivnaqvK00iOu9F0SK"
);

function ClickFrameModal() {
  const toast = useToast();
  const router = useRouter();

  const authState = useSelector((state: any) => state.auth.isLogged);
  const [userId, setUserId] = useState();

  // const [isVisible, setIsVisible] = useState(true);
  const [planCount, setPlanCount] = useState(0);
  const [boughtImages, setBoughtImages] = useState([]);

  const onOpen = useSelector((state: any) => state.clickFrame.frameState);
  const imageSrc = useSelector((state: any) => state.clickFrame.src);
  const width = useSelector((state: any) => state.clickFrame.width);
  const height = useSelector((state: any) => state.clickFrame.height);
  const size = useSelector((state: any) => state.clickFrame.size);
  const price = useSelector((state: any) => state.clickFrame.price);
  const discount = useSelector((state: any) => state.clickFrame.discount);
  const photoId = useSelector((state: any) => state.clickFrame.photoId);
  const title = useSelector((state: any) => state.clickFrame.title);

  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");

  const onProfilePhotoChangeHandler = (e: any) => {
    setImage(e.target.files[0]);
  };

  //-------------------------------------------------------

  const isCollectionModalOpen = useSelector(
    (state: any) => state.modal.isCollection
  );

  const buyVisiblity = useSelector((state: any) => state.clickFrame.buyVisible);

  let isVisible = buyVisiblity ? 1 : 0;
  isVisible = planCount > 0 ? 0 : 1;

  let isImageBought = boughtImages.find((obj: any) => obj.photoId === photoId);
  isVisible = isImageBought ? 0 : 1;

  isVisible = isCollectionModalOpen ? 0 : isVisible;

  let download_Button_Visibility = isVisible ? 0 : 1;

  const finalPrice = price - (discount / 100) * price;
  //--------------------------------------------------------------------

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  // const { isOpen, onOpen , onClose } = useDisclosure();

  const onToggle = () => {
    dispatch(clickFrameActions.frameStateToggle());
  };

  //---------------------------------- download count

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleApi = () => {
    const url = `${backendUrl}/api/v1/count/increaseDownloadCount`;
    axios({
      url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        photoId,
        title,
        size,
      },
    })
      .then((res) => {
        onToggle();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const downloadImage = () => {
    const func = async () => {
      let res = await fetch(`${backendUrl}/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let data = await res.json();
      data.data.data.planCount -= 1;

      const url = `${backendUrl}/api/v1/users/updateMe`;
      axios({
        url,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data.data.data,
      });
    };
    func();
    handleApi();
    saveAs(imageSrc, "image.jpg");
  };

  useEffect(() => {
    const func = async () => {
      try {
        let res = await fetch(`${backendUrl}/api/v1/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        let data = await res.json();

        setUserId(data.data.data._id);
        dispatch(renderActions.userIdDefiner(data.data.data._id));
        dispatch(renderActions.authorDefiner(data.data.data.name));

        {
          authState && setPlanCount(data.data.data.planCount);
          authState && setBoughtImages(data.data.data.boughtImages);
        }
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, [authState, backendUrl, dispatch]);

  // checkout-session
  const onBuyItClickHandler = async () => {
    if (authState) {
      try {
        const session = await axios(
          `${backendUrl}/api/v1/payment/checkout-session/${photoId}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        router.push(session.data.session.url);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast({
        title: "You are not logged in, please log in first !!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const onAddToKartHandler = () => {
    if (authState) {
      const url = `${backendUrl}/api/v1/cart/${userId}`;
      axios({
        url,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          photoId,
          title,
          size,
          price,
          discount,
          newPrice: finalPrice,
        },
      })
        .then((res) => {
          dispatch(renderActions.isCartItemDeleteCounter());
          toast({
            title: "Image successfully added To Cart",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((error) => {
          toast({
            title: "Cannot add Image to the Cart, Try again later",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "You are not logged in, please log in first !!!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  let withWidth = true;
  if (height > width) {
    withWidth = false;
  }
  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <OverlayTwo />
        <ModalContent bgColor={"transparent"} position={"fixed"} left={"0"}>
          <ModalBody>
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100vw"
              height="100vh"
              flexDirection="column"
            >
              <Flex
                width="60%"
                height="75%"
                bgColor="white"
                borderRadius="8px"
                justifyContent="space-around"
                alignItems="center"
                border="3px solid #708090"
              >
                <Flex
                  height={"90%"}
                  width={"70%"}
                  justifyContent={"center"}
                  alignItems="center"
                >
                  {withWidth && (
                    <Image
                      width="100%"
                      src={`${imageSrc}`}
                      alt="loading"
                    ></Image>
                  )}
                  {!withWidth && (
                    <Image
                      height="100%"
                      src={`${imageSrc}`}
                      alt="loading"
                    ></Image>
                  )}
                </Flex>
                <Flex
                  height={"90%"}
                  width={"25%"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Flex width={"100%"} height="10%" justifyContent="center">
                    <Flex
                      height="100%"
                      width="95%"
                      justifyContent={"center"}
                      alignItems="center"
                      border="1px dotted #00FFFF"
                      borderRadius={"5px"}
                      bgColor="#E0FFFF"
                    >
                      <Heading fontSize={"130%"}>{title}</Heading>
                    </Flex>
                  </Flex>
                  <Flex
                    width={"100%"}
                    height="80%"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center"
                    padding="10px"
                  >
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                      border="1px dotted"
                      borderRadius={"5px"}
                    >
                      <Text fontSize={"80%"}>
                        {width} x {height}
                      </Text>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                      border="1px dotted"
                      borderRadius={"5px"}
                    >
                      <Heading fontSize="80%">{size}</Heading>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                      color="red"
                      border="1px dotted"
                      borderRadius={"5px"}
                    >
                      <Heading fontSize="80%" color="red">
                        {`Rs. ${price}`}
                      </Heading>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                      color="green"
                      border="1px dotted"
                      borderRadius={"5px"}
                    >
                      <Heading fontSize="80%">{`- ${discount}% OFF`}</Heading>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                      color="green"
                      border="1px dotted"
                      borderRadius={"5px"}
                    >
                      <Heading fontSize="80%" color="red">
                        {`Rs. ${finalPrice}*`}
                      </Heading>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Button
                        width="100%"
                        height="100%"
                        bgColor="#90EE90"
                        _hover={{ borderRadius: "10px" }}
                        borderStyle="none"
                        border="1px dotted green"
                        color="#006400"
                        onClick={downloadImage}
                        visibility={
                          download_Button_Visibility ? "visible" : "hidden"
                        }
                      >
                        <Heading fontSize="100%">DOWNLOAD</Heading>
                      </Button>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      margin={"2"}
                      alignItems="center"
                    >
                      <Button
                        width="100%"
                        height="100%"
                        bgColor="#87CEEB"
                        _hover={{ borderRadius: "10px" }}
                        borderStyle="none"
                        border="1px dotted #1E90FF"
                        color="#008080"
                        visibility={isVisible ? "visible" : "hidden"}
                        onClick={onBuyItClickHandler}
                      >
                        <Heading fontSize="100%">Buy It</Heading>
                      </Button>
                    </Flex>
                    <Flex
                      height="10%"
                      width="100%"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Button
                        width="100%"
                        height="100%"
                        bgColor="green.300"
                        _hover={{ borderRadius: "10px" }}
                        borderStyle="none"
                        border="1px dotted green"
                        color="green"
                        visibility={isVisible ? "visible" : "hidden"}
                        onClick={onAddToKartHandler}
                      >
                        <Heading fontSize="100%">Add to Cart</Heading>
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Box borderRadius="50%" onClick={onToggle}>
                <CancelIcon fontSize="large" color="error"></CancelIcon>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ClickFrameModal;
