import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  ModalHeader,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store";

import CollectionModal from "../components/CollectionModal";
import Profile from "../components/Profile";
import { useEffect, useState, useRef } from "react";
import UserActivity from "../components/UserActivity";
import ChangePassword from "../components/ChangePassword";
import UploadModal from "../components/UploadModal";
import EditModal from "../components/EditModal";
import Login from "../components/Login";
import Signup from "../components/Signup";
import axios from "axios";

function ModalFrame() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  const inputFile = useRef<HTMLInputElement | null>(null);
  const [isProfile, setIsProfile] = useState(true);
  const [isUserActivity, setIsUserActivity] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  //Arraybuffer data
  const [data, setData] = useState([]);

  const [image, setImage] = useState("");

  const onProfilePhotoChangeHandler = (e: any) => {
    // console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  // const onProfileClick = () => {
  //   setIsProfile(true);
  //   setIsChangePassword(false);
  //   setIsUserActivity(false);
  // };

  // const onUserActivityClick = () => {
  //   setIsProfile(false);
  //   setIsChangePassword(false);
  //   setIsUserActivity(true);
  // };

  // const onChangePasswordClick = () => {
  //   setIsProfile(false);
  //   setIsChangePassword(true);
  //   setIsUserActivity(false);
  // };

  // CONVERTING ARRAYBUFFER TO BASE64
  function base64ArrayBuffer(arrayBuffer: any) {
    var base64 = "";
    var encodings =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;

    var a, b, c, d;
    var chunk;

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
      d = chunk & 63; // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength];

      a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4; // 3   = 2^2 - 1

      base64 += encodings[a] + encodings[b] + "==";
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

      a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2; // 15    = 2^4 - 1

      base64 += encodings[a] + encodings[b] + encodings[c] + "=";
    }

    return base64;
  }
  const base64String = base64ArrayBuffer(data);

  //-----------------------api-------------------------------------

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [isRender, setIsRender] = useState(0);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.data.img.data.data);
      })
      .catch((err) => console.log(err));
  }, [isRender, backendUrl]);

  const onButtonClick = () => {
    inputFile.current!.click();
  };

  const handleApi = () => {
    // console.log(image);
    const formData = new FormData();
    formData.append("img", image);

    const url = `${backendUrl}/api/v1/users/updateMe`;
    axios({
      url,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: formData,
    })
      .then((res) => {
        setIsRender(isRender + 1);
        // console.log(res);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const dispatch = useDispatch();
  const onOpen = useSelector((state: any) => state.modal.isAccount);

  const onToggle = () => {
    dispatch(modalActions.accountToggle());
  };

  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <OverlayTwo />
        <ModalContent
          height={"80vh"}
          bgColor={"transparent"}
          position={"fixed"}
          left="0"
        >
          <ModalBody
            width="100vw"
            height="70vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={"column"}
          >
            <ModalBody
              width={"70vw"}
              height={"40vh"}
              boxShadow={"2px 2px 5px"}
              bg={"#C197D2"}
              borderRadius={"10px"}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <Flex width="100%" height="100%">
                <Flex
                  width="22%"
                  height="100%"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding={"20px"}
                  // border="2px solid #9932CC"
                >
                  <Flex
                    width="100%"
                    height="50%"
                    marginBottom={"5px"}
                    alignItems={"center"}
                    justifyContent="center"
                    flexDirection={"column"}
                  >
                    <Flex
                      height="300px"
                      width="300px"
                      border="2px solid white"
                      // boxShadow="5px 5px 5px #DDA0DD"
                      borderRadius="50%"
                      overflow="hidden"
                      // justifyContent="center"
                    >
                      <Image
                        width="100%"
                        src={`data:image/png;base64,${base64String}`}
                        alt="loading..."
                      ></Image>
                    </Flex>
                  </Flex>
                  {/* for uploading files --------------------------------------------- */}

                  <Input
                    type={"file"}
                    ref={inputFile}
                    onChange={onProfilePhotoChangeHandler}
                    style={{ display: "none" }}
                  ></Input>

                  {/* All Buttons ----------------------------------*/}
                  <Flex
                    height="7%"
                    width="80%"
                    // border="1px solid"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      width="90%"
                      height="90%"
                      borderRadius="10px"
                      // borderStyle="none"
                      border="1px solid white"
                      color="#9932CC"
                      _hover={{ bgColor: "#9932CC", color: "white" }}
                      onClick={onButtonClick}
                    >
                      CHOOSE PICTURE
                    </Button>
                  </Flex>
                  <Flex
                    height="7%"
                    width="80%"
                    marginBottom={"15%"}
                    // border="1px solid"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      width="90%"
                      height="90%"
                      borderRadius="10px"
                      // borderStyle="none"
                      border="1px solid white"
                      color="#9932CC"
                      _hover={{ bgColor: "#9932CC", color: "white" }}
                      onClick={handleApi}
                    >
                      CHANGE PROFILE
                    </Button>
                  </Flex>
                  <Flex
                    height="7%"
                    width="80%"
                    // border="1px solid"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      width="90%"
                      height="90%"
                      borderRadius="10px"
                      // borderStyle="none"
                      border="1px solid white"
                      color="#9932CC"
                      _hover={{ bgColor: "#9932CC", color: "white" }}
                      onClick={() => {
                        dispatch(modalActions.editToggle());
                      }}
                    >
                      UPDATE PROFILE
                    </Button>
                  </Flex>
                  <Flex
                    height="7%"
                    width="80%"
                    // border="1px solid"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      width="90%"
                      height="90%"
                      borderRadius="10px"
                      border="1px solid white"
                      color="#9932CC"
                      _hover={{ bgColor: "#9932CC", color: "white" }}
                      onClick={() => {
                        dispatch(modalActions.changePasswordToggle());
                      }}
                    >
                      CHANGE-PASSWORD
                    </Button>
                  </Flex>
                </Flex>

                {/* right part -------------------------------------- */}
                <Flex
                  width="80%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Flex
                    width={"80%"}
                    height={"40%"}
                    margin={"10px"}
                    border={"2px solid white"}
                    borderRadius={"3px"}
                  >
                    <Profile></Profile>
                  </Flex>
                  <Flex
                    width={"80%"}
                    height={"40%"}
                    margin={"10px"}
                    border={"2px solid white"}
                    borderRadius={"3px"}
                  >
                    <UserActivity></UserActivity>
                  </Flex>
                </Flex>
              </Flex>

              <CollectionModal></CollectionModal>
              <UploadModal></UploadModal>
              <EditModal></EditModal>
              <Login></Login>
              <Signup></Signup>
            </ModalBody>
            <Box borderRadius="50%" onClick={onToggle}>
              <CloseIcon sx={{ color: "red", fontSize: "3rem" }}></CloseIcon>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalFrame;
