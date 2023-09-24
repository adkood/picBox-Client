import { Flex } from "@chakra-ui/react";
// import { BarChart } from '@mui/x-charts/BarChart';

const BaiscInfo = () => {
  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Flex
        width="100%"
        height={"50%"}
        border={"1px solid"}
        justifyContent="center"
        alignItems="center"
      >
        <Flex width={"80%"} height={"90%"} border={"1px solid"} justifyContent={"space-around"} alignItems={"end"}>

          {/* -------------------------------------------- */}
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>no of users</Flex>
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>no of images</Flex>
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>no of download</Flex>
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>no of transaction</Flex>
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>total demands</Flex>
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>on demand cleared</Flex>
            <Flex border={"1px solid red"} width={"8%"} height={"70%"}>on demand pending</Flex>
          {/* -------------------------------------------- */}

        </Flex>
      </Flex>
      <Flex
        width="100%"
        height={"50%"}
        border={"1px solid"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
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
