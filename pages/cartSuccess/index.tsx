import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { renderActions } from "../../store";

const CartSuccess = () => {
  const [toShow, setToShow] = useState([]);
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();

  const { userId } = router.query;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartResponse = await fetch(
          `${backendUrl}/api/v1/cart/addToBoughtImages/${userId}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({}),
          }
        );
        const data = await cartResponse.json();

        toast({
          title: "Images added to your collection :)",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Error:", error);
        toast({
          title: "An error occurred. Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    if (userId && backendUrl) {
      fetchData();
    }
  }, [userId, backendUrl, dispatch, toast]); // Include toShow in the dependencies array

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      bgColor="lightgreen"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Heading fontSize={"400%"}>CART PAYMENT SUCCESSFUL!</Heading>
      <Button
        onClick={() => {
          router.push("/");
        }}
        color="purple.500"
      >
        Return to Home
      </Button>
    </Flex>
  );
};

export default CartSuccess;
