import { Flex, useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { confirmationActions } from "../../store";

const UserFrame = ({ userId, name, email, profession, role }) => {
  const dispatch = useDispatch();

  const onToggle1 = () => {
    dispatch(confirmationActions.userIdDefiner(userId));
    dispatch(confirmationActions.userDeleteStateToggle());
  };

  const onToggle2 = () => {
    dispatch(confirmationActions.userIdDefiner(userId));
    dispatch(confirmationActions.roleUpdateStateToggle());
  };

  return (
    <Flex width={"100"} height={"20"} border={"1px solid"} margin={"5px"}>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"18%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>ID</span>
          <span>{userId}</span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Name</span>
          <span>{name}</span>
        </Flex>
        <Flex
          width={"6%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Role</span>
          <span>{role}</span>
        </Flex>
        <Flex
          width={"12%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Profession</span>
          <span>{profession}</span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Email</span>
          <span>{email}</span>
        </Flex>
        <Flex
          width={"13%"}
          height={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <span>Change Role</span>
          <EditIcon
            ml={"1"}
            sx={{ color: "blue", fontSize: "2.2rem" }}
            onClick={onToggle2}
          ></EditIcon>
        </Flex>
        <Flex
          width={"5%"}
          height={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
          border="1px solid"
        >
          <DeleteIcon
            sx={{ color: "red", fontSize: "2.2rem" }}
            onClick={onToggle1}
          ></DeleteIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserFrame;
