import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  ModalHeader,
  Input,
} from "@chakra-ui/react";

import React, { useRef } from "react";
import { Button, Text } from "@chakra-ui/react";

import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Frame from "../ui/Frame";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store";

function EditModal() {
  const onOpen = useSelector((state: any) => state.modal.isEdit);
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const professionRef = useRef<HTMLInputElement>(null);

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  // const { isOpen, onOpen , onClose } = useDisclosure();

  const onToggle = () => {
    dispatch(modalActions.editToggle());
  };

  //api
  const onClickHandler = async () => {
    let user = {};

    if (nameRef.current?.value !== "") {
      user = { ...user, name: nameRef.current!.value };
    }
    if (emailRef.current?.value !== "") {
      user = { ...user, email: emailRef.current!.value };
    }
    if (professionRef.current?.value !== "") {
      user = { ...user, profession: professionRef.current!.value };
    }

    const response = await fetch(
      "http://127.0.0.1:8000/api/v1/users/updateMe",
      {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    onToggle();
  };

  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <OverlayTwo />
        <ModalContent bgColor={"transparent"} position={"fixed"} left={"0"}>
          <ModalBody>
            <Flex
              // justifyContent="center"
              marginTop={"20%"}
              alignItems="center"
              width="100vw"
              height="100vh"
              flexDirection="column"
            >
              <ModalHeader
                fontSize="150%"
                fontFamily="serif"
                fontWeight="bold"
                color="#9370DB"
              >
                EDIT DETAILS
              </ModalHeader>

              <Flex
                flexWrap="wrap"
                gap="15"
                width="40%"
                height="40%"
                bgColor="white"
                borderRadius="5px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Flex
                  height="50%"
                  width="90%"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Input
                    border="1px solid #9370DB"
                    width="90%"
                    height="30%"
                    borderRadius="10px"
                    placeholder="New name"
                    fontSize="100%"
                    fontFamily="serif"
                    ref={nameRef}
                  ></Input>
                  <Input
                    border="1px solid #9370DB"
                    width="90%"
                    height="30%"
                    borderRadius="10px"
                    placeholder="New email"
                    fontSize="100%"
                    fontFamily="serif"
                    ref={emailRef}
                  ></Input>
                  <Input
                    border="1px solid #9370DB"
                    width="90%"
                    height="30%"
                    borderRadius="10px"
                    placeholder="New profession"
                    fontSize="100%"
                    fontFamily="serif"
                    ref={professionRef}
                  ></Input>
                </Flex>
                <Button
                  width="30%"
                  borderStyle="none"
                  color="#9370DB"
                  borderRadius="10px"
                  _hover={{ bgColor: "#9370DB" , color: "white"}}
                  onClick={onClickHandler}
                  fontSize={"20px"}
                >
                  click to edit
                  <UploadFileIcon color="primary" fontSize="large"></UploadFileIcon>
                </Button>
              </Flex>
              <Box borderRadius="50%" onClick={onToggle}>
                <CancelIcon fontSize="large" color="error"></CancelIcon>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModal;
