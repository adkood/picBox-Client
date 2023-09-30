import { useState, useRef, useEffect } from "react";
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

import axios from "axios";

export default function GetImageForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const isOpen = useSelector((state: any) => state.modal.isGetImage);
  const dispatch = useDispatch();

  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [coun, setCont] = useState();
  const [str, setStr] = useState();
  const [ct, setCt] = useState();
  const [scl, setScl] = useState();
  const [desc, setDesc] = useState();

  const onToggle = () => {
    dispatch(modalActions.getImageToggle());
  };

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [isRender, setIsRender] = useState(false);

  const handleApi = () => {
    const forData = {
      firstName: first,
      lastName: last,
      email: email,
      country: coun,
      street: str,
      city: ct,
      social: scl,
      imageDesc: desc,
    };

    const url = `${backendUrl}/api/v1/demand/createDemand`;
    axios({
      url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: forData,
    })
      .then((res) => {
        setIsRender(true);
        toast({
          title: "Image Request Sent.",
          description: "We've started looking for the image you required.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Unable to send request.",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    // for rerendering
  }, [isRender]);

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
            <Form1 setFirst={setFirst} setLast={setLast} setEmail={setEmail} />
          ) : step === 2 ? (
            <Form2 setCont={setCont} setStr={setStr} setCt={setCt} />
          ) : (
            <Form3 setScl={setScl} setDesc={setDesc} />
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
                    handleApi();
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
