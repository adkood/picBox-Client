import { Flex, Heading } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        width={"70%"}
        height={"10%"}
        justifyContent={"center"}
        alignItems={"center"}
        borderBottom={"2px solid"}
      >
        <Heading>WELCOME TO THE DASHBOARD</Heading>
      </Flex>
      <Flex width={"70%"} height={"60%"} flexDirection={"column"}>
        <span>
          <b>
            {
              "-> Here you can get information about all the users and you can also update the role of the user as well as delete the user."
            }
          </b>
        </span>
        <span>
          <b>{"-> The information is also graphically reperesented."}</b>
        </span>
        <span>
          <b>
            {
              "-> Here you can get information about all the images and you can also delete the images"
            }
          </b>
        </span>
        <span>
          <b>
            {"-> Here you can get information about all the images download."}
          </b>
        </span>
        <span>
          <b>
            {
              "-> Here you can get information about all the transaction completed."
            }
          </b>
        </span>
        <span>
          <b>
            {
              "-> Here you can get information about all the images demanded by the user and you can also resolve the demand of users from here."
            }
          </b>
        </span>
      </Flex>
    </Flex>
  );
};

export default Intro;
