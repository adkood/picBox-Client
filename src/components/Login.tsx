import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store";

import { authActions } from "../../store";
import { useRouter } from "next/router";

// const LoginHandler = () => {};

const Login = () => {
  const toast = useToast();
  const onOpen = useSelector((state: any) => state.modal.isLogin);
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  const onToggle = () => {
    dispatch(modalActions.loginToggle());
  };

  // api requests

  const onLoginClickHandler = async () => {
    const user = {
      email: usernameRef.current!.value,
      password: passwordRef.current!.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Authentication Failed!");
      }

      const data = await response.json();
      const tokenId = data.token;
      // console.log(tokenId);
      dispatch(authActions.login(tokenId));
      setIsLogin(true);
      toast({
        title: "You are now Logged In.",
        description: "You can now upload, download and buy any image.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setMessage("you are now logged in!");
      onToggle();
    } catch (err: any) {
      toast({
        title: "You canont Log In.",
        description: "Try again after some time",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setMessage(err.message);
    }
  };

  return (
    <>
      {/* {isLogin && (
        <Alert
          status="success"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="100px"
          colorScheme={"green"}
        >
          <AlertIcon boxSize="40px" mr={0} />
          {message}
        </Alert>
      )}
      {!isLogin && (
        <Alert
          status="error"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="100px"
          border={'1px solid'}
          colorScheme={"red"}
        >
          <AlertIcon boxSize="40px" mr={0} />
          {message}
        </Alert>
      )} */}
      <Modal isCentered isOpen={onOpen} onClose={onToggle}>
        <OverlayTwo />
        <ModalContent bgColor={"transparent"} position={"fixed"} left="0">
          <ModalBody>
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100vw"
              height="100vh"
              flexDirection="column"

              // bgColor="blue"
            >
              <Flex
                width="30%"
                height="50%"
                bgColor="white"
                borderRadius="8px"
                flexDirection={"column"}
                alignItems="center"
              >
                <Flex
                  height="35%"
                  margin={"15px"}
                  justifyContent="center"
                  bgColor={"grey"}
                >
                  <Avatar height="100%" width="100%" src="/profile.png" borderRadius={"5px"} />
                </Flex>

                <Box className="container">
                  {/* <Label>
                <b>Username</b>
              </Label> */}
                  <Input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                    ref={usernameRef}
                  />
                  {/* <Label>
                <Text>Password</Text>
              </Label> */}
                  <Input
                    // onFocus={{ borderStyle: 'none' }}
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    ref={passwordRef}
                  />

                  <Flex
                    width="100%"
                    height={"50%"}
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Button
                      borderStyle="none"
                      width="50%"
                      height="65%"
                      borderRadius="10px"
                      // type="submit"
                      bgColor="green.300"
                      onClick={onLoginClickHandler}
                    >
                      Login
                    </Button>
                    <Button
                      borderStyle="none"
                      type="button"
                      bgColor="red.300"
                      borderRadius="10px"
                      width="50%"
                      height="65%"
                      onClick={onToggle}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </Box>

                <Flex
                  className="container"
                  width="100%"
                  height="20%"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <span className="psw">
                    Forgot <a href="#">password?</a>
                  </span>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
