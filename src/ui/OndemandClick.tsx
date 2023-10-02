import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Flex,
  Heading,
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
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"purple.500"}
            >
              <Flex height="30%" m={"1"}>
                <Heading fontSize={"1.rem"}>Id :</Heading>
              </Flex>
              <Flex height="70%" m={"1"}>
                <b>
                  <span>{id}</span>
                </b>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"13%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"purple.500"}
            >
              <Flex height="30%" m={"1"}>
                <Heading fontSize={"1rem"}>Demanded By :</Heading>
              </Flex>
              <Flex height="70%" m={"1"}>
                <span>
                  <b>
                    {firstName} {lastName}
                  </b>
                </span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"11%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"purple.500"}
            >
              <Flex height="30%" m={"1"}>
                <Heading fontSize={"1rem"}>Email :</Heading>
              </Flex>
              <Flex height="70%" m={"1"}>
                <span>
                  <b>{email}</b>
                </span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"13%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"purple.500"}
            >
              <Flex height="30%" m={"1"}>
                <Heading fontSize={"1rem"}>Address :</Heading>
              </Flex>
              <Flex height="70%" m={"1"}>
                <span>
                  <b>
                    {country}, {city}
                  </b>
                </span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"11%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"purple.500"}
            >
              <Flex height="30%" m={"1"}>
                <Heading fontSize={"1rem"}>Socials :</Heading>
              </Flex>
              <Flex height="70%" m={"1"}>
                <span>
                  <b>{social}</b>
                </span>
              </Flex>
            </Flex>
            <Flex
              width={"90%"}
              height={"16%"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"purple.500"}
            >
              <Flex height="30%" m={"1"}>
                <Heading fontSize={"1rem"}>Image Description :</Heading>
              </Flex>
              <Flex height="70%" m={"1"}>
                <span>
                  <b>{imageDesc}</b>
                </span>
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
