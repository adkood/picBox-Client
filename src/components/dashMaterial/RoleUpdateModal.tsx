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

const RoleUpdateModal = () => {

  const [isRerender, setisRerender] = useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.confirm.userId);
  const onOpen = useSelector((state: any) => state.confirm.roleUpdateState);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const roleChange = () => {
    const url = `${backendUrl}/api/v1/users/${userId}`;
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
    dispatch(confirmationActions.roleUpdateStateToggle());
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
              <b>Do you realy want to CHANGE this user's role to admin ?</b>
            </span>
          </ModalBody>
          <Flex justifyContent={"center"}>
            <Button
              onClick={roleChange}
              color="white"
              bgColor={"green"}
              width={"19%"}
              m={"5px"}
              _hover={{ bgColor: "green.400" }}
            >
              Update
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

export default RoleUpdateModal;
