import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store";

const ChangePassword = () => {
  const onOpen = useSelector((state: any) => state.modal.isChangePassword);
  const dispatch = useDispatch();

  const currPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onToggle = () => {
    dispatch(modalActions.changePasswordToggle());
  };

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const onClickHandler = async () => {
    const data = {
      passwordCurrent: currPasswordRef.current!.value,
      password: newPasswordRef.current!.value,
      passwordConfirm: confirmPasswordRef.current!.value,
    };

    const response = await fetch(
      `${backendUrl}/api/v1/users/updateMyPassword`,
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

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  return (
    <Modal isOpen={onOpen} onClose={onToggle}>
      <OverlayTwo />
      <ModalContent
        height={"90vh"}
        bgColor={"transparent"}
        position={"fixed"}
        left={"0"}
      >
        <ModalBody
          flexDirection={"column"}
          marginTop={"20%"}
          alignItems={"center"}
          display={"flex"}
          width="100vw"
          // height="80vh"
        >
          <Flex
            height="40%"
            width="30%"
            bgColor={"purple.200"}
            boxShadow={"1px 1px 4px"}
            borderRadius="10px"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            p={"5"}
          >
            <Input
              height="20%"
              width="97%"
              borderRadius="5px"
              placeholder="Your Password"
              // borderStyle="none"
              fontSize="100%"
              color="purple.500"
              bgColor={"white"}
              ref={currPasswordRef}
            ></Input>
            <Input
              height="20%"
              width="97%"
              borderRadius="5px"
              placeholder="New Password"
              // borderStyle="none"
              color="purple.500"
              bgColor={"white"}
              fontSize="100%"
              ref={newPasswordRef}
            ></Input>
            <Input
              height="20%"
              width="97%"
              borderRadius="5px"
              // border="1px solid #9932CC"
              placeholder="Confirm your Password"
              // borderStyle="none"
              bgColor={"white"}
              color="purple.500"
              fontSize="100%"
              ref={confirmPasswordRef}
            ></Input>

            <Button
              width="97%"
              height="16%"
              borderStyle="none"
              borderRadius="5px"
              color="purple.500"
              _hover={{ bgColor: "purple.300", color: "white" }}
              cursor="pointer"
              onClick={onClickHandler}
            >
              CLICK TO CHANGE
              <EditIcon fontSize="large" color="primary" />
            </Button>
          </Flex>
          <Box borderRadius="50%" onClick={onToggle}>
            <CloseIcon sx={{ color: "red", fontSize: "2.5rem" }}></CloseIcon>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChangePassword;
