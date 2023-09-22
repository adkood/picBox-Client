import { Flex } from "@chakra-ui/react";

const BaiscInfo = () => {
  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Flex width="100%" height={"40%"} border={"1px solid"}>
        <Flex width={"50%"} height={"100%"} border={"1px solid"}></Flex>
        <Flex width={"50%"} height={"100%"}></Flex>
      </Flex>
      <Flex width="100%" height={"60%"} border={"1px solid"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          no of users
        </Flex>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          no of images
        </Flex>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          no of download
        </Flex>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          no of pictures bought
        </Flex>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          biggest transaction
        </Flex>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          ondemand cleared
        </Flex>
        <Flex width={"90%"} height={"13%"} border={"1px solid"}>
          ondemand pending
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BaiscInfo;