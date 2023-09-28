import { Flex, Heading } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { confirmationActions } from "../../store";

const ImageFrame = ({ userId, title, size, price, discount, auther }) => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(confirmationActions.photoIdDefiner(userId)); // photoId == userId
    dispatch(confirmationActions.imageDeleteStateToggle());
  };

  return (
    <Flex width={"100"} height={"20"} border={"1px solid #720e9e"} borderRadius={"3px"} margin={"5px"}>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"17%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Id</Heading>
          <span><b>{userId}</b></span>
        </Flex>
        <Flex
          width={"15%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Title</Heading>
          <span><b>{title}</b></span>
        </Flex>
        <Flex
          width={"8%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Size</Heading>
          <span><b>{size}</b></span>
        </Flex>
        <Flex
          width={"10%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Price</Heading>
          <span><b>{price}</b></span>
        </Flex>
        <Flex
          width={"10%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Discount(%)</Heading>
          <span><b>{discount}</b></span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Posted By</Heading>
          <span><b>{auther}</b></span>
        </Flex>
        <Flex
          width={"6%"}
          height={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DeleteIcon sx={{ color: "red.500", fontSize: "2.2rem" }} onClick={onToggle}></DeleteIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageFrame;
