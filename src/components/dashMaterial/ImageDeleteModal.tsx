import React from "react";
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
import { confirmationActions, renderActions } from "../../../store";

const ImageDeleteModal = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const photoId = useSelector((state: any) => state.confirm.photoId);
  const onOpen = useSelector((state: any) => state.confirm.imageDeleteState);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const deleteUser = () => {
    const url = `${backendUrl}/api/v1/photo/${photoId}`;
    axios({
      url,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        toast({
          title: "Image successfully deleted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(res);
        dispatch(renderActions.isDeleteCounter());
        onToggle();
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
    dispatch(confirmationActions.imageDeleteStateToggle());
  };



  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <ModalOverlay />
        <ModalContent mt={"200px"} height={"200px"}>
          <ModalHeader color={"red"}>Confirmation !</ModalHeader>
          <ModalBody>
            <span>
              <b>
                Do you realy want to <span color="red">delete</span> this Image
                ?
              </b>
            </span>
          </ModalBody>
          <Flex justifyContent={"center"}>
            <Button
              onClick={deleteUser}
              color="white"
              bgColor={"red.500"}
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
              _hover={{ bgColor: "grey.500" }}
            >
              Cancel
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageDeleteModal;
