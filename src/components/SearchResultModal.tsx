import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  ModalHeader,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import React, { useCallback, useEffect, useState } from "react";
// import { useDisclosure } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";

import CancelIcon from "@mui/icons-material/Cancel";
import Frame from "../ui/Frame";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store";

function SearchResultModal() {
  const onOpen = useSelector((state: any) => state.modal.isSearch);
  const dispatch = useDispatch();
  const [imageArray, setImageArray] = useState([]);
  const [size, setSize] = useState(0);

  const searchData = useSelector((state: any) => state.searchData.searchData);

  // const imagesFetchHandler = useCallback(async () => {
  //   const response = await fetch(
  //     `http://127.0.0.1:8000/api/v1/photo/search/${searchData}`
  //   );
  //   const data = await response.json();
  //   setImageArray(data.data);
  //   setSize(data.length);
  // }, [searchData]);

  // useEffect(() => {
  //   imagesFetchHandler();
  // }, [imagesFetchHandler]);

  // let divSize = size / 3;
  // if (size % 3 != 0) {
  //   divSize++;
  // }

  // const arr1 = imageArray.splice(0,2);
  // console.log(arr1);

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  const onToggle = () => {
    dispatch(modalActions.searchToggle());
  };

  function base64ArrayBuffer(arrayBuffer: any) {
    var base64 = "";
    var encodings =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;

    var a, b, c, d;
    var chunk;

    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
      d = chunk & 63; // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength];

      a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4; // 3   = 2^2 - 1

      base64 += encodings[a] + encodings[b] + "==";
    } else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

      a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2; // 15    = 2^4 - 1

      base64 += encodings[a] + encodings[b] + encodings[c] + "=";
    }

    return base64;
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/photo/search/${searchData}`)
      .then((response) => response.json())
      .then((res) => setImageArray(res.data))
      .catch((err) => console.log(err));
  }, [searchData]);

  // console.log(imageArray);

  return (
    <>
      <Modal isCentered isOpen={onOpen} onClose={onToggle}>
        <OverlayTwo />
        <ModalContent>
          <ModalBody>
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100vw"
              height="100vh"
              flexDirection="column"
            >
              <Flex
                width="79%"
                height="90%"
                // bgColor="#282828"
                borderRadius="8px"
                flexDirection={"column"}
                alignItems="center"

                // css = "::-webkit-scrollbar {
                //   display: none
                // }"
              >
                <Flex
                  height={"5%"}
                  margin="10px"
                  borderBottom="2px solid"
                  width={"100%"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Text fontFamily={"mono"} fontWeight="bold" fontSize="230%">
                    SEARCH
                  </Text>
                  <Text fontFamily={"mono"} fontWeight="thin" fontSize="230%">
                    -RESULT
                  </Text>
                </Flex>
                <Flex
                  height="95%"
                  width="100%"
                  overflow={"scroll"}
                  // css = "::-webkit-scrollbar {
                  //         width: 0px
                  //       }"
                >
                  <Flex
                    height="100%"
                    width="24.9%"
                    flexDirection="column"
                    // overflow="hidden"
                  >
                    {imageArray &&
                      imageArray.map((i: any) => {
                        const base64String = base64ArrayBuffer(i.img.data.data);
                        return (
                          <Frame
                            key={i._id}
                            id={i._id}
                            title={i.title}
                            width={i.width * 1}
                            height={i.height * 1}
                            size={i.size}
                            discount={i.priceDiscount}
                            price={i.price}
                            imageUrl={`data:image/*;base64,${base64String}`}
                          ></Frame>
                        );
                      })}
                  </Flex>
                  <Flex
                    height="100%"
                    width="24.9%"
                    flexDirection="column"
                    // overflow="hidden"
                  >
                    {/* <Frame imageUrl="./demo9.jfif"></Frame>
                    <Frame imageUrl="./demo18.jfif"></Frame>
                    <Frame imageUrl="./demo11.jfif"></Frame>
                    <Frame imageUrl="./demo12.jfif"></Frame>
                    <Frame imageUrl="./demo13.jfif"></Frame>
                    <Frame imageUrl="./demo2.jfif"></Frame> */}
                  </Flex>
                  <Flex
                    height="100%"
                    width="24.9%"
                    flexDirection="column"
                    // overflow="hidden"
                  >
                    {/* <Frame imageUrl="./demo14.jfif"></Frame>
                    <Frame imageUrl="./demo15.jfif"></Frame>
                    <Frame imageUrl="./demo16.jfif"></Frame>
                    <Frame imageUrl="./demo17.jfif"></Frame>
                    <Frame imageUrl="./demo10.jfif"></Frame>
                    <Frame imageUrl="./demo3.jfif"></Frame> */}
                  </Flex>
                  <Flex
                    height="100%"
                    width="24.9%"
                    flexDirection="column"
                    // overflow="hidden"
                  >
                    {/* <Frame imageUrl="./demo7.jfif"></Frame>
                    <Frame imageUrl="./demo8.jfif"></Frame>
                    <Frame imageUrl="./demo3.jfif"></Frame>
                    <Frame imageUrl="./demo4.jfif"></Frame>
                    <Frame imageUrl="./demo5.jfif"></Frame>
                    <Frame imageUrl="./demo1.jfif"></Frame> */}
                  </Flex>
                </Flex>
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

export default SearchResultModal;
