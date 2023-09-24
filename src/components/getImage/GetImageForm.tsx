"use client";

import { useState, useRef } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

export default function GetImageForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const isOpen = useSelector((state: any) => state.modal.isGetImage);
  const dispatch = useDispatch();

  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const socialRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const onToggle = () => {
    dispatch(modalActions.getImageToggle());
  };

  return (
    <Modal isOpen={isOpen} onClose={onToggle}>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="30%"
        backdropBlur="2px"
      />
      <ModalContent>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          p={14}
          as="form"
        >
          <Progress
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
          ></Progress>
          {step === 1 ? (
            <Form1 fr={firstRef} lr={lastRef} er={emailRef} />
          ) : step === 2 ? (
            <Form2 cr={countryRef} sr={streetRef} ctr={cityRef} />
          ) : (
            <Form3 sr={socialRef} dr={descRef} />
          )}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 33.33);
                  }}
                  isDisabled={step === 1}
                  colorScheme="blue"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w="7rem"
                  isDisabled={step === 3}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 33.33);
                    }
                  }}
                  colorScheme="blue"
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  colorScheme="blue"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: "Image Request Sent.",
                      description:
                        "We've started looking for the image you required.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    onToggle();
                  }}
                >
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
        {/* </ModalBody>
        </ModalBody> */}
      </ModalContent>
    </Modal>
  );
}
