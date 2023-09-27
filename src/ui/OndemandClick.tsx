import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { demandActions } from "../../store";
import { modalActions } from "../../store";

function OndemandClick() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.clickDemand.demandState);
  const id = useSelector((state: any) => state.clickDemand.id);
  const firstName = useSelector((state: any) => state.clickDemand.firstName);
  const lastName = useSelector((state: any) => state.clickDemand.lastName);
  const email = useSelector((state: any) => state.clickDemand.email);
  const country = useSelector((state: any) => state.clickDemand.country);
  const city = useSelector((state: any) => state.clickDemand.city);
  const social = useSelector((state: any) => state.clickDemand.social);
  const imageDesc = useSelector((state: any) => state.clickDemand.imageDesc);
  const isResolved = useSelector((state: any) => state.clickDemand.isResolved);

  const onToggle = () => {
    dispatch(demandActions.demandStateToggle());
  };
  const onToggle2 = () => {
    dispatch(modalActions.demandUploadToggle());
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onToggle}>
        <ModalOverlay />
        <ModalContent height={"60vh"} width={"600px"}>
          <Flex
            width={"100%"}
            height={"100%"}
            justifyContent={"space-around"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Flex
              width={"90%"}
              height={"11%"}
              border={"1px solid red"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex height="30%">
                <span>Id :</span>
              </Flex>
              <Flex height="70%">
                <span>{id}</span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"13%"}
              border={"1px solid red"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex height="30%">
                <span>Demand By :</span>
              </Flex>
              <Flex height="70%">
                <span>
                  {firstName} {lastName}
                </span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"11%"}
              border={"1px solid red"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex height="30%">
                <span>Email :</span>
              </Flex>
              <Flex height="70%">
                <span>{email}</span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"13%"}
              border={"1px solid red"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex height="30%">
                <span>Address :</span>
              </Flex>
              <Flex height="70%">
                <span>
                  {country}, {city}
                </span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"11%"}
              border={"1px solid red"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex height="30%">
                <span>Social :</span>
              </Flex>
              <Flex height="70%">
                <span>{social}</span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"22%"}
              border={"1px solid red"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex height="30%">
                <span>Image Description :</span>
              </Flex>
              <Flex height="70%">
                <span>{imageDesc}</span>
              </Flex>
            </Flex>
          </Flex>
          <ModalFooter justifyContent={"center"}>
            {!isResolved && (
              <Button colorScheme="green" mr={3} onClick={onToggle2}>
                Resolve
              </Button>
            )}
            <Button colorScheme="red" onClick={onToggle}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OndemandClick;
