import { Flex } from "@chakra-ui/react";
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'

const UserFrame = ({ userId, name, email, profession, role }) => {
  return (
    <Flex width={"100"} height={"20"} border={"1px solid"} margin={"5px"}>
      <Flex width={"100%"} height={"100%"} justifyContent={"space-around"} alignItems={"center"}>
        <Flex width={"15%"} height={"90%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} border="1px solid">
          <span>ID</span>
          <span>{userId}</span>
        </Flex>
        <Flex width={"13%"} height={"90%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}border="1px solid">
          <span>Name</span>
          <span>{name}</span>
        </Flex>
        <Flex width={"8%"} height={"90%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} border="1px solid">
          <span>Role</span>
          <span>{role}</span>
        </Flex>
        <Flex width={"12%"} height={"90%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} border="1px solid">
          <span>Profession</span>
          <span>{profession}</span>
        </Flex>
        <Flex width={"13%"} height={"90%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} border="1px solid">
          <span>Email</span>
          <span>{email}</span>
        </Flex>
        <Flex width={"5%"} height={"80%"} justifyContent={"center"} alignItems={"center"} border="1px solid">
            <EditIcon sx={{ color: "blue", fontSize: "2.2rem" }}></EditIcon>
        </Flex>
        <Flex width={"5%"} height={"80%"} justifyContent={"center"} alignItems={"center"} border="1px solid">
            <DeleteIcon sx={{ color: "red", fontSize: "2.2rem" }}></DeleteIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserFrame;
