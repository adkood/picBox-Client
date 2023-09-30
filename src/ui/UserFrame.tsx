import { Flex, Heading, useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { confirmationActions } from "../../store";

interface UserFrameProps {
  userId: string;
  name: string;
  email: string;
  profession: string;
  role: string;
}

const UserFrame: React.FC<UserFrameProps> = ({
  userId,
  name,
  email,
  profession,
  role,
}) => {
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
    <Flex
      width={"100"}
      height={"20"}
      border={"1px solid #720e9e"}
      margin={"5px"}
      borderRadius={"3px"}
    >
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
        >
          <Heading fontSize={"1.1rem"}>Id</Heading>
          <span>
            <b>{userId}</b>
          </span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Name</Heading>
          <span>
            <b>{name}</b>
          </span>
        </Flex>
        <Flex
          width={"6%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Role</Heading>
          <span>
            <b>{role}</b>
          </span>
        </Flex>
        <Flex
          width={"12%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Profession</Heading>
          <span>
            <b>{profession}</b>
          </span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"1.1rem"}>Email</Heading>
          <span>
            <b>{email}</b>
          </span>
        </Flex>
        <Flex
          width={"13%"}
          height={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading color={"blue.500"} fontSize={"1rem"}>
            Change Role
          </Heading>
          <EditIcon
            ml={"1"}
            sx={{ color: "blue.500", fontSize: "2.2rem" }}
            onClick={onToggle2}
          ></EditIcon>
        </Flex>
        <Flex
          width={"5%"}
          height={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DeleteIcon
            sx={{ color: "red.500", fontSize: "2.2rem" }}
            onClick={onToggle1}
          ></DeleteIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserFrame;
