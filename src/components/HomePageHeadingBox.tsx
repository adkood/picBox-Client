import { Flex, Heading } from "@chakra-ui/react";
import Login from "./Login";
import SearchBox from "./SearchBox";
import ReactPlayer from "react-player";
// import AlertBox from "../ui/AlertBox";

const HomePageHeadingBox = () => {
  return (
    <Flex
      height="69%"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="transparent"
    >
      <ReactPlayer
        loop={true}
        muted={true}
        playing={true}
        width={"100%"}
        height="100%"
        url="//videos.ctfassets.net/hrltx12pl8hq/614OWyaQLch6LHBHNQX8af/f3e6d397bff7382c28d2f141aec1df93/Homepage_Hero_7.webm"
      ></ReactPlayer>
      <Flex
        width="70%"
        height="10%"
        position="absolute"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          alignItems="center"
          fontSize="150%"
          color="white"
        >
          A place where you can explore the creativity and imagination
        </Heading>
        <SearchBox></SearchBox>
      </Flex>
    </Flex>
  );
};

export default HomePageHeadingBox;
