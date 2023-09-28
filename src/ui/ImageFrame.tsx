import { Flex } from "@chakra-ui/react";
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
    <Flex width={"100"} height={"20"} border={"1px solid"} margin={"5px"}>
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
          border="1px solid"
        >
          <span>ID</span>
          <span>{userId}</span>
        </Flex>
        <Flex
          width={"15%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Title</span>
          <span>{title}</span>
        </Flex>
        <Flex
          width={"8%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Size</span>
          <span>{size}</span>
        </Flex>
        <Flex
          width={"10%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Price</span>
          <span>{price}</span>
        </Flex>
        <Flex
          width={"10%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Discount(%)</span>
          <span>{discount}</span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Posted By</span>
          <span>{auther}</span>
        </Flex>
        <Flex
          width={"6%"}
          height={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <DeleteIcon sx={{ color: "red", fontSize: "2.2rem" }} onClick={onToggle}></DeleteIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageFrame;
