import { Button, Flex } from "@chakra-ui/react";
import EditIcon from "@mui/icons-material/Edit";

const UserActivity = () => {
  return (
    <Flex
      height="100%"
      width="100%"
      borderRadius="10px"
      flexDirection="column"
      fontSize="20px"
      // bgColor={'white'}
    >
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
        // justifyContent={"space-between"}
      >
        <Flex width="80%" padding="20px">
          <span>Total Images Uploaded:</span>
        </Flex>
        <Flex width="20%" padding="20px">
          <span>10</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="80%" padding="20px">
          <span>Total Images Downloaded:</span>
        </Flex>
        <Flex width="20%" padding="20px">
          <span>9</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="80%" padding="20px">
          <span>Last Image was Uploaded on:</span>
        </Flex>
        <Flex width="20%" padding={"20px"}>
          <span>{new Date().getDate()}th</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="80%" padding="20px">
          <span>Last Image was Downloaded on:</span>
        </Flex>
        <Flex width="20%" padding="20px">
          <span>{new Date().getDate()}th</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserActivity;
