import { Button, Flex } from "@chakra-ui/react";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store";

const Profile = () => {
  const [name, setName] = useState("undefined");
  const [email, setEmail] = useState("undefined");
  const [profession, setProfession] = useState("undefined");
  const [userId, setUserId] = useState("undefined");

  const dispatch = useDispatch();

  //api

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.data);
        setName(data.data.data.name);
        setEmail(data.data.data.email);
        setProfession(data.data.data.profession);
        setUserId(data.data.data._id);
      })
      .catch((err) => console.log(err));
  }, [name, email, profession, backendUrl]);

  // console.log("name:", name);

  return (
    <Flex
      height="100%"
      width="100%"
      borderRadius="10px"
      flexDirection="column"
      fontSize={"20px"}
      // bgColor='white'
    >
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
        _hover={{ bgColor: "white", color: "#9932CC" }}
      >
        <Flex width="60%" padding="20px">
          <span>Name:</span>
        </Flex>
        <Flex width={"40%"} padding="20px">
          <span>{name}</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
        _hover={{ bgColor: "white", color: "#9932CC" }}
      >
        <Flex width="60%" padding="20px">
          <span>UserId:</span>
        </Flex>
        <Flex width={"40%"} padding="20px">
          <span>{userId}</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
        _hover={{ bgColor: "white", color: "#9932CC" }}
      >
        <Flex width="60%" padding="20px">
          <span>E-Mail:</span>
        </Flex>
        <Flex width={"40%"} padding="20px">
          <span>{email}</span>
        </Flex>
      </Flex>
      <Flex
        height="25%"
        border="1px solid white"
        color="white"
        alignItems="center"
        _hover={{ bgColor: "white", color: "#9932CC" }}
      >
        <Flex width="60%" padding="20px">
          <span>Profession:</span>
        </Flex>
        <Flex width={"40%"} padding="20px">
          <span>{profession}</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
