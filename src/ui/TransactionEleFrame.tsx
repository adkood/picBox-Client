import { Flex } from "@chakra-ui/react";

const TransactionEleFrame = ({photoId , title , size, name , price, date}) => {
  return (
    <Flex width={"100"} height={"20"} border={"1px solid"} margin={"5px"}>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"20%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>ID</span>
          <span>{photoId}</span>
        </Flex>
        <Flex
          width={"13%"}
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
          width={"11%"}
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
          <span>Price(Rs.)</span>
          <span>{price}</span>
        </Flex>
        <Flex
          width={"15%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Bought By</span>
          <span>{name}</span>
        </Flex><Flex
          width={"17%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Bought On</span>
          <span>{date}</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TransactionEleFrame;
