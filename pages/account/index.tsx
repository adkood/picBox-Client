import { Button, Flex, Image, Input } from "@chakra-ui/react";
import Card from "../../src/ui/Card";
import Navbar from "../../src/ui/Navbar";
import CollectionModal from "../../src/components/CollectionModal";
import Profile from "../../src/components/Profile";
import { useEffect, useState } from "react";
import UserActivity from "../../src/components/UserActivity";
import ChangePassword from "../../src/components/ChangePassword";
import UploadModal from "../../src/components/UploadModal";
import EditModal from "../../src/components/EditModal";
import Login from "../../src/components/Login";
import Signup from "../../src/components/Signup";
import axios from "axios";

const Account = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [isUserActivity, setIsUserActivity] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);

  //Arraybuffer data
  const [data, setData] = useState([]);

  const [image, setImage] = useState("");

  const onProfilePhotoChangeHandler = (e: any) => {
    // console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const onProfileClick = () => {
    setIsProfile(true);
    setIsChangePassword(false);
    setIsUserActivity(false);
  };

  const onUserActivityClick = () => {
    setIsProfile(false);
    setIsChangePassword(false);
    setIsUserActivity(true);
  };

  const onChangePasswordClick = () => {
    setIsProfile(false);
    setIsChangePassword(true);
    setIsUserActivity(false);
  };

  // CONVERTING ARRAYBUFFER TO BASE64
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
  const base64String = base64ArrayBuffer(data);

  //api

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.data.img.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleApi = () => {
    // console.log(image);
    const formData = new FormData();
    formData.append("img", image);

    const url = "http://127.0.0.1:8000/api/v1/users/updateMe";
    axios({
      url,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: formData,
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="column"
    >
      <Navbar></Navbar>
      <Card>
        <Flex width="100%" height="100%">
          <Flex
            width="22%"
            height="100%"
            // border="2px solid"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={"20px"}
          >
            <Flex
              width="100%"
              height="40%"
              alignItems={"center"}
              justifyContent="center"
              flexDirection={"column"}
            >
              <Flex
                height="300px"
                width="300px"
                border="2px solid #DDA0DD"
                // boxShadow="5px 5px 5px #DDA0DD"
                borderRadius="50%"
                overflow="hidden"
                // justifyContent="center"
              >
                <Image
                  width="100%"
                  src={`data:image/png;base64,${base64String}`}
                  alt="loading..."
                ></Image>
              </Flex>
            </Flex>
            {/* for uploading files --------------------------------------------- */}

            <Input
              type={"file"}
              // accept="image/*"
              onChange={onProfilePhotoChangeHandler}
              // border='1px solid'
              color='#DDA0DD'
              justifyContent={'center'}
              alignContent='center'
            ></Input>

            <Flex
              height="7%"
              width="70%"
              // border="1px solid"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                width="90%"
                height="90%"
                borderRadius="10px"
                // borderStyle="none"
                border="1px solid #DDA0DD"
                color="#DDA0DD"
                boxShadow="5px 5px #DDA0DD"
                _hover={{ bgColor: "#DDA0DD", color: "white" }}
                onClick={handleApi}
              >Change Profile</Button>
            </Flex>

            {/* ------------------------------------------------------------------------ */}
            <Flex
              height="7%"
              width="70%"
              // border="1px solid"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                width="90%"
                height="90%"
                borderRadius="10px"
                // borderStyle="none"
                border="1px solid #DDA0DD"
                color="#DDA0DD"
                boxShadow="5px 5px #DDA0DD"
                _hover={{ bgColor: "#DDA0DD", color: "white" }}
                onClick={onProfileClick}
              >
                PROFILE
              </Button>
            </Flex>
            <Flex
              height="7%"
              width="70%"
              // border="1px solid"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                width="90%"
                height="90%"
                borderRadius="10px"
                border="1px solid #DDA0DD"
                color="#DDA0DD"
                boxShadow="5px 5px 5px #DDA0DD"
                _hover={{ bgColor: "#DDA0DD", color: "white" }}
                onClick={onUserActivityClick}
                fontFamily="Press Start 2P"
              >
                USER-ACTIVITY
              </Button>
            </Flex>
            <Flex
              height="7%"
              width="70%"
              // border="1px solid"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                width="90%"
                height="90%"
                borderRadius="10px"
                border="1px solid #DDA0DD"
                color="#DDA0DD"
                boxShadow="5px 5px 5px #DDA0DD"
                _hover={{ bgColor: "#DDA0DD", color: "white" }}
                onClick={onChangePasswordClick}
              >
                CHANGE-PASSWORD
              </Button>
            </Flex>
          </Flex>
          <Flex
            width="80%"
            // border="2px solid"
            justifyContent="center"
            alignItems="center"
          >
            {isProfile && <Profile></Profile>}
            {isUserActivity && <UserActivity></UserActivity>}
            {isChangePassword && <ChangePassword></ChangePassword>}
          </Flex>
        </Flex>
      </Card>
      <CollectionModal></CollectionModal>
      <UploadModal></UploadModal>
      <EditModal></EditModal>
      <Login></Login>
      <Signup></Signup>
    </Flex>
  );
};

export default Account;
