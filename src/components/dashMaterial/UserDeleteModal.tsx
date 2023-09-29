import React, { useRef,useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { confirmationActions } from "../../../store";

const UserDeleteModal = () => {

  const [isRerender, setisRerender] = useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.confirm.userId);
  const onOpen = useSelector((state: any) => state.confirm.userDeleteState);

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
        setisRerender(true);
        // window.location.reload();
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

  const onToggle = () => {
    dispatch(confirmationActions.userDeleteStateToggle());
  };

  useEffect(() => {
    // for rerendering
  },[isRerender]);

  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <ModalOverlay />
        <ModalContent mt={"200px"} height={"200px"}>
          <ModalHeader color={"red"}>Confirmation !</ModalHeader>
          <ModalBody>
            <span>
              <b>Do you realy want to delete this user ?</b>
            </span>
          </ModalBody>
          <Flex justifyContent={"center"}>
            <Button
              onClick={deleteUser}
              color="white"
              bgColor={"red"}
              width={"19%"}
              m={"5px"}
              _hover={{ bgColor: "red.400" }}
            >
              Delete
            </Button>
            <Button
              onClick={onToggle}
              color="white"
              bgColor={"grey"}
              width={"19%"}
              m={"5px"}
              _hover={{ bgColor: "grey.400" }}
            >
              Cancel
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserDeleteModal;
