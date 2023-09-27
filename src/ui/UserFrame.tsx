import { Flex, useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";

const UserFrame = ({ userId, name, email, profession, role }) => {
  console.log(userId);
  const toast = useToast();

  const deleteUser = () => {
    const url = `http://127.0.0.1:8000/api/v1/users/${userId}`;
    axios({
      url,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        toast({
          title: "User successfully deleted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch((error) => {
        toast({
          title: "Unable to send request.",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(error);
        window.location.reload();
      });
  };

  const roleChange = () => {
    const url = `http://127.0.0.1:8000/api/v1/users/${userId}`;
    axios({
      url,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        toast({
          title: "Role successfully updated.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        toast({
          title: "Unable to send request.",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(error);
      });
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
            onClick={roleChange}
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
            onClick={deleteUser}
          ></DeleteIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserFrame;
