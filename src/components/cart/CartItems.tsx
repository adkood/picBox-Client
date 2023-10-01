import { Flex, Heading } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { renderActions } from "../../../store";

const CartItems = ({
  photoId,
  title,
  size,
  price,
  discount,
  finalPrice,
}: {
  photoId: string;
  title: string;
  size: number;
  price: number;
  discount: number;
  finalPrice: number;
}) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.render.userId);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const onDeleteHandler = async () => {
    const url = `${backendUrl}/api/v1/cart/remove/${userId}`;
    axios({
      url,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        photoId,
        finalPrice,
      },
    })
      .then((res) => {
        dispatch(renderActions.isCartItemDeleteCounter());
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex
      width="100%"
      height="60px"
      border="1px solid purple"
      borderRadius="3px"
      justifyContent={"space-evenly"}
      alignItems={"center"}
      mb={"2"}
    >
      <Flex
        width={"15%"}
        height={"100%"}
        color="purple.500"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading fontSize={"1rem"}>Title</Heading>
        <span>
          <b>{title}</b>
        </span>
      </Flex>
      <Flex
        width={"15%"}
        height={"100%"}
        color="purple.500"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading fontSize={"1rem"}>Size</Heading>
        <span>
          <b>{size}</b>
        </span>
      </Flex>
      <Flex
        width={"15%"}
        height={"100%"}
        color="purple.500"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading fontSize={"1rem"}>Price</Heading>
        <span>
          <b>{price}</b>
        </span>
      </Flex>
      <Flex
        width={"15%"}
        height={"100%"}
        color="purple.500"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading fontSize={"1rem"}>Discount</Heading>
        <span>
          <b>{discount}</b>
        </span>
      </Flex>
      <CloseIcon
        cursor={"pointer"}
        onClick={onDeleteHandler}
        color={"red"}
        fontSize={"2rem"}
      ></CloseIcon>
    </Flex>
  );
};

export default CartItems;
