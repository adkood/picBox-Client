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

const Form3 = ({setScl , setDesc}) => {
  // const socialRef = useRef<HTMLInputElement>(null);
  // const descriptionRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Description
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Your Social Profile
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e) => setScl(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Describe the Picture you need
          </FormLabel>
          <Textarea
            placeholder="describe here"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default Form3;
