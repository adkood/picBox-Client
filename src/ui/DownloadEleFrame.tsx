import { Flex } from "@chakra-ui/react";

const DownloadEleFrame = ({userId , title , size, date}) => {
  return (
    <Flex width={"100"} height={"20"} border={"1px solid"} margin={"5px"}>
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
          border="1px solid"
        >
          <span>ID</span>
          <span>{userId}</span>
        </Flex>
        <Flex
          width={"25%"}
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
          width={"25%"}
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
          width={"25%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Downloaded On</span>
          <span>{date}</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DownloadEleFrame;
