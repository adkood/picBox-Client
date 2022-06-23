import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ProfileFrame from "./ClickFrameModal";
import PremiumPlan from "./plans/PremiumPlan";

const HomePageArtists = () => {
  const uiColor = useSelector((state: any) => state.ui.uiColorCode);
  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems={"center"}
      flexDirection={"column"}
      // bgColor="yellow"
    >
      <Flex
        h="100%"
        w="77vw"
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Flex
          width="100%"
          height="30%"
          bgColor={"#f8f8ff"}
          justifyContent="space-between"
          alignItems={"center"}
          // flexDirection="column"
          fontFamily={"monospace"}
          // borderRadius="10px"
        >
          <Flex
            width="70%"
            height={"100%"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection="column"
          >
            <Heading fontSize={"200%"} color="lightBlue">
              OUR PRICING!
            </Heading>
            <Text fontSize="150%">
              Pick up a deal which suits you and build your project more
              beautifully.
            </Text>
          </Flex>
          <Flex
            width="20%"
            height={"100%"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection="column"
          >
            <Image
              width="100%"
              height="100%"
              src="https://www.b2binternational.com/wp-content/uploads/2014/12/07July-Price.png"
              alt="loading"
            ></Image>
          </Flex>
        </Flex>
        <Flex width="100%" height="60%">
          <PremiumPlan></PremiumPlan>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePageArtists;
