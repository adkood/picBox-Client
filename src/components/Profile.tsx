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
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setName(data.data.data.name);
        setEmail(data.data.data.email);
        setProfession(data.data.data.profession);
        setUserId(data.data.data._id);
      })
      .catch((err) => console.log(err));
  }, [name, email, profession]);

  // console.log("name:", name);

  return (
    <Flex
      height="70%"
      width="90%"
      border="3px solid white"
      borderRadius="10px"
      flexDirection="column"
      boxShadow="5px 10px white"
      fontSize={"20px"}
      // bgColor='white'
    >
      <Flex
        height="23%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="30%" justifyContent="center">
          <span>Name:</span>
        </Flex>
        <Flex width="60%" justifyContent="center">
          <span>{name}</span>
        </Flex>
      </Flex>
      <Flex
        height="23%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="30%" justifyContent="center">
          <span>UserId:</span>
        </Flex>
        <Flex width="60%" justifyContent="center">
          <span>{userId}</span>
        </Flex>
      </Flex>
      <Flex
        height="23%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="30%" justifyContent="center">
          <span>E-Mail:</span>
        </Flex>
        <Flex width="60%" justifyContent="center">
          <span>{email}</span>
        </Flex>
      </Flex>
      <Flex
        height="23%"
        border="1px solid white"
        color="white"
        alignItems="center"
      >
        <Flex width="30%" justifyContent="center">
          <span>Profession:</span>
        </Flex>
        <Flex width="60%" justifyContent="center">
          <span>{profession}</span>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        height={"8%"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Button
          width="100%"
          borderStyle="none"
          borderRadius="5px"
          color={"#9932CC"}
          _hover={{ bgColor: "#9932CC", color: "white" }}
          cursor="pointer"
          onClick={() => {
            dispatch(modalActions.editToggle());
          }}
        >
          CLICK TO EDIT
          <EditIcon fontSize="large" color="primary" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Profile;
