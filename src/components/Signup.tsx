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
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store";
import { authActions } from "../../store";
import { useRouter } from "next/router";

import axios from "axios";

const LoginHandler = () => {};

const Signup = () => {
  const onOpen = useSelector((state: any) => state.modal.isSignup);
  const dispatch = useDispatch();
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  const onToggle = () => {
    dispatch(modalActions.signupToggle());
  };

  // api requests

  const onSignupClickHandler = async () => {
    const user = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
      passwordConfirm: passwordConfirmRef.current!.value,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/users/signup",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Authentication Failed!");
      }

      const data = await response.json();
      const tokenId = data.token;
      // console.log(tokenId);
      dispatch(authActions.login(tokenId));
      onToggle();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Modal isCentered isOpen={onOpen} onClose={onToggle}>
      <OverlayTwo />
      <ModalContent>
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
              width="35%"
              height="40%"
              bgColor="white"
              borderRadius="8px"
              flexDirection={"column"}
              alignItems="center"
            >
              <Box className="container" width="94%" height="60%">
                <Input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                  ref={nameRef}
                />
                <Input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  required
                  ref={emailRef}
                />
                <Input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  ref={passwordRef}
                  required
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  name="Confirmpsw"
                  required
                  ref={passwordConfirmRef}
                />
              </Box>

              <Flex
                className="container"
                width="100%"
                height="30%"
                justifyContent={"center"}
                alignItems="center"
              >
                <Button
                  borderStyle="none"
                  borderRadius="10px"
                  width="47%"
                  height={"70%"}
                  bgColor="#50C878"
                  type="submit"
                  onClick={onSignupClickHandler}
                >
                  SignUp
                </Button>
                <Button
                  borderStyle="none"
                  type="button"
                  width="47%"
                  bgColor="#ff7070"
                  height={"70%"}
                  borderRadius="10px"
                  onClick={onToggle}
                >
                  Cancel
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Signup;
