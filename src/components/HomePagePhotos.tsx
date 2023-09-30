import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import axios from "axios";
import { Image } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store";
import { authActions } from "../../store";
import Frame from "../ui/Frame";
import { Spinner } from "@chakra-ui/react";

const HomePagePhotos = () => {
  const dispatch = useDispatch();
  const [imageArray1, setImageArray1] = useState([]);
  const [imageArray2, setImageArray2] = useState([]);
  const [imageArray3, setImageArray3] = useState([]);
  // const [role, setRole] = useState("user");

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

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    let func1 = async () => {
      await fetch(`${backendUrl}/api/v1/photo/getFivePhotos?page=1&limit=5`)
        .then((response) => response.json())
        .then((res) => setImageArray1(res.data.data))
        .catch((err) => console.log(err));
    };

    let func2 = async () => {
      await fetch(`${backendUrl}/api/v1/photo/getFivePhotos?page=2&limit=5`)
        .then((response) => response.json())
        .then((res) => setImageArray2(res.data.data))
        .catch((err) => console.log(err));
    };

    let func3 = async () => {
      await fetch(`${backendUrl}/api/v1/photo/getFivePhotos?page=3&limit=5`)
        .then((response) => response.json())
        .then((res) => setImageArray3(res.data.data))
        .catch((err) => console.log(err));
    };

    const call = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/v1/users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("unable to fetch user role");
        }
        const data = await response.json();
        console.log(data);
        dispatch(authActions.roleDefiner(data.data.data.role));
      } catch (error) {
        console.log(error);
      }
    };

    func1();
    func2();
    func3();
    call();
  }, [backendUrl]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      height="300vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      overflow="hidden"
    >
      <Flex
        height="100%"
        width="77vw"
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        <Flex
          height={"5%"}
          margin="10px"
          borderBottom="2px solid"
          width={"100%"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text fontWeight="bold" fontSize="180%">
            EXPLORE
          </Text>
          <Text fontWeight="light" fontSize="180%">
            -IMAGES
          </Text>
        </Flex>
        <Flex height="85%" width="100%">
          <Flex
            height="100%"
            width="24.5%"
            flexDirection="column"
            overflow="clip"
          >
            {imageArray1.length > 0 ? (
              imageArray1.map((i: any) => {
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
              })
            ) : (
              <Flex width={"100%"} height={"100%"} justifyContent={"center"}>
                <Spinner
                  margin={"10%"}
                  width={"50px"}
                  height={"50px"}
                  color="#9370DB"
                />
              </Flex>
            )}
          </Flex>
          <Flex
            height="100%"
            width="24.5%"
            flexDirection="column"
            overflow="clip"
          >
            {imageArray2.length > 0 ? (
              imageArray2.map((i: any) => {
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
              })
            ) : (
              <Flex width={"100%"} height={"100%"} justifyContent={"center"}>
                <Spinner
                  margin={"10%"}
                  width={"50px"}
                  height={"50px"}
                  color="#9370DB"
                />
              </Flex>
            )}
          </Flex>
          <Flex
            height="100%"
            width="24.5%"
            flexDirection="column"
            overflow="clip"
          >
            {imageArray3.length > 0 ? (
              imageArray3.map((i: any) => {
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
              })
            ) : (
              <Flex width={"100%"} height={"100%"} justifyContent={"center"}>
                <Spinner
                  margin={"10%"}
                  width={"50px"}
                  height={"50px"}
                  color="#9370DB"
                />
              </Flex>
            )}
          </Flex>

          <Flex
            height="100%"
            width="24.5%"
            flexDirection="column"
            overflow="clip"
          >
            {imageArray1.length > 0 ? (
              imageArray1.map((i: any) => {
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
              })
            ) : (
              <Flex width={"100%"} height={"100%"} justifyContent={"center"}>
                <Spinner
                  margin={"10%"}
                  width={"50px"}
                  height={"50px"}
                  color="#9370DB"
                />
              </Flex>
            )}
          </Flex>
        </Flex>

        <Flex
          height="10%"
          width="100%"
          justifyContent={"center"}
          alignItems="center"
        >
          <Flex
            borderRadius={"10px"}
            cursor="pointer"
            width="77vw"
            height="25%"
            fontSize="180%"
            fontFamily="mono"
            borderStyle="none"
            color="purple.400"
            backgroundColor="purple.100"
            justifyContent={"center"}
            alignItems="center"
            onClick={scrollToTop}
          >
            Search for more...
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePagePhotos;
