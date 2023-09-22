import { Button, Flex } from "@chakra-ui/react";
import BaiscInfo from "../../src/components/dashMaterial/BasicInfo";

const DashBoard = () => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex width={"70%"} height={"80%"} border={"1px solid green"}>
        <Flex
          width={"22%"}
          height={"100%"}
          border={"1px solid"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Basic Information
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            All Users
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Download Information
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Transaction Information
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Check On-Demand Information
          </Flex>
        </Flex>
        <Flex
          width={"78%"}
          height={"100%"}
          border={"1px solid"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <BaiscInfo></BaiscInfo>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
