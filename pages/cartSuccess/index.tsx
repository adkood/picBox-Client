import { Flex } from "@chakra-ui/react";
import Navbar from "../../src/ui/Navbar";

const cartSuccess = () => {
    return (
        <Flex
        width={"100vw"}
        height={"100vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Navbar></Navbar>

        SUCCESS
        </Flex>
    );
}

export default cartSuccess;