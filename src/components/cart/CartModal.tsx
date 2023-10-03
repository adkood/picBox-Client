import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Grid,
  Divider,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { error } from "console";
import CartItems from "./CartItems";
import { useRouter } from "next/router";
import { modalActions, renderActions } from "../../../store";

const CartModal = () => {
    const router = useRouter();
  const userId = useSelector((state: any) => state.render.userId);
  const author = useSelector((state: any) => state.render.author);

  const cartItemDeleted = useSelector(
    (state: any) => state.render.isCartItemDelete
  );
  const onOpen = useSelector((state: any) => state.modal.isCart);
  const dispatch = useDispatch();
  const [toShow, setToShow] = useState([]);
  const [totalAmount, setAmount] = useState(0);
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="4px"
    />
  );

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log(userId);
  useEffect(() => {
    const func = async () => {
      try {
        let res = await fetch(`${backendUrl}/api/v1/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        let data = await res.json();
        console.log(data);
        setToShow(data.cartData);
        setAmount(data.cartAmount);
        dispatch(renderActions.cartItemCountDefiner(data.cartData.length));
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, [backendUrl, userId, cartItemDeleted, dispatch]);

  const onToggle = () => {
    dispatch(modalActions.cartToggle());
  };

  const paymentHandler = async () => {
    try {
      const session = await axios(
        `${backendUrl}/api/v1/payment/checkout-session-cart/${userId}/${author}`,
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
  };

  let c = 0;
  return (
    <Modal isOpen={onOpen} onClose={onToggle}>
      <OverlayTwo />
      <ModalContent height={"600px"}>
        <ModalBody height="100%" width={"100%"}>
          <Box
            boxShadow="lg"
            p="4"
            width={"100%"}
            height={"100%"}
            borderRadius="md"
            // borderWidth="1px"
            borderColor="gray.200"
            bgColor={"white"}
          >
            <Text fontWeight="bold" fontSize="2rem" mb="4" color={"purple.400"}>
              Your Cart
            </Text>

            <Divider my="4" />
            <Box
              width="100%"
              height={"60%"}
              overflow={"scroll"}
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {toShow && toShow.length > 0 ? (
                toShow.map((ele: any, index: number) => (
                  <CartItems
                    key={index}
                    photoId={ele._id}
                    title={ele.title}
                    size={ele.size}
                    price={ele.price}
                    discount={ele.discount}
                    finalPrice={ele.finalPrice}
                  />
                ))
              ) : (
                <Text>No items in the cart.</Text>
              )}
            </Box>

            <Divider my="4" />
            <Grid templateColumns="1fr 1fr" alignItems="center">
              <Text fontWeight="bold" color="purple.500">
                Total:
              </Text>
              <Text textAlign="right" color="purple.500">
                {totalAmount}
              </Text>
            </Grid>
            <Button
              onClick={paymentHandler}
              bgColor="purple.300"
              mt="4"
              w="100%"
              size="sm"
            >
              Checkout
            </Button>
            <Button
              onClick={() => {
                dispatch(modalActions.cartToggle());
              }}
              bgColor="red.400"
              mt="4"
              w="100%"
              size="sm"
            >
              Close
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
