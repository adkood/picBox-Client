import { Button, Flex } from "@chakra-ui/react";
import EditIcon from "@mui/icons-material/Edit";

const UserActivity = () => {
  return (
    <Flex
      height="50%"
      width="70%"
      border="3px solid #D8BFD8"
      borderRadius="10px"
      flexDirection="column"
      boxShadow="5px 10px 5px #D8BFD8"
      bgColor={'white'}
    >
      <Flex
        height="25%"
        border="1px solid #D8BFD8"
        color="#BA55D3"
        alignItems="center"
      >
        <Flex width="70%" justifyContent="center">
          <span>Total Images Uploaded:</span>
        </Flex>
        <Flex width="30%" justifyContent="center">
          <span>10</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid #D8BFD8"
        color="#BA55D3"
        alignItems="center"
      >
        <Flex width="70%" justifyContent="center">
          <span>Total Images Downloaded:</span>
        </Flex>
        <Flex width="30%" justifyContent="center">
          <span>9</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid #D8BFD8"
        color="#BA55D3"
        alignItems="center"
      >
        <Flex width="70%" justifyContent="center">
          <span>Last Image was Uploaded on:</span>
        </Flex>
        <Flex width="30%" justifyContent="center">
          <span>{new Date().getDate()}th</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid #D8BFD8"
        color="#BA55D3"
        alignItems="center"
      >
        <Flex width="70%" justifyContent="center">
          <span>Last Image was Downloaded on:</span>
        </Flex>
        <Flex width="30%" justifyContent="center">
          <span>{new Date().getDate()}th</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserActivity;
