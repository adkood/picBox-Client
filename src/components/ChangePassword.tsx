import EditIcon from "@mui/icons-material/Edit";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useRef } from "react";

const ChangePassword = () => {
  const currPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onClickHandler = async () => {
    const data = {
      passwordCurrent: currPasswordRef.current!.value,
      password: newPasswordRef.current!.value,
      passwordConfirm: confirmPasswordRef.current!.value,
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/users/updateMyPassword",
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <Flex
      height="60%"
      width="80%"
      border="3px solid white"
      borderRadius="10px"
      flexDirection="column"
      boxShadow="5px 10px white"
      alignItems="center"
      justifyContent="space-around"
    >
      <Input
        height="20%"
        width="97%"
        borderRadius="5px"
        placeholder="Your Password"
        borderStyle="none"
        fontSize="100%"
        backgroundColor={"none"}
        ref={currPasswordRef}
      ></Input>
      <Input
        height="20%"
        width="97%"
        borderRadius="5px"
        placeholder="New Password"
        borderStyle="none"
        fontSize="100%"
        ref={newPasswordRef}
      ></Input>
      <Input
        height="20%"
        width="97%"
        borderRadius="5px"
        placeholder="Confirm your Password"
        borderStyle="none"
        fontSize="100%"
        ref={confirmPasswordRef}
      ></Input>

      <Button
        width="97%"
        height="16%"
        borderStyle="none"
        borderRadius="5px"
        color= "#9932CC"
        _hover={{ bgColor: "#9932CC", color: 'white' }}
        cursor="pointer"
        onClick={onClickHandler}
      >
        CLICK TO CHANGE
        <EditIcon fontSize="large" color="primary" />
      </Button>
    </Flex>
  );
};

export default ChangePassword;
