import { Flex, Heading } from "@chakra-ui/react";

const DownloadEleFrame = ({userId , title , size, date}) => {
  return (
    <Flex width={"100"} height={"20"} border={"1px solid #720e9e"} margin={"5px"} borderRadius="3px">
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"25%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Id</Heading>
          <span><b>{userId}</b></span>
        </Flex>
        <Flex
          width={"25%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Title</Heading>
          <span><b>{title}</b></span>
        </Flex>
        <Flex
          width={"25%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Size</Heading>
          <span><b>{size}</b></span>
        </Flex>
        <Flex
          width={"25%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Downloaded On</Heading>
          <span><b>{date}</b></span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DownloadEleFrame;
