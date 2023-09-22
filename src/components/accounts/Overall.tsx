import React, { useState } from "react";
import styles from "./OverallCss.module.css";
import { Box, Flex, Image, Input, TagLabel } from "@chakra-ui/react";

const Overall = () => {
  const [profileImage, setProfileImage] = useState(
    "/default-profile-image.png"
  );
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    location: "New York, USA",
    bio: "Web Developer",
  });

  // Function to handle profile image change
  const handleImageChange = (e: any) => {
    const selectedImage = URL.createObjectURL(e.target.files[0]);
    setProfileImage(selectedImage);
  };

  return (
    <Flex height={"100vh"} width={"100vw"} border={"1px solid"}>
      <Flex
        border={"1px solid"}
        height={"100%"}
        width={"23%"}
        flexDirection={"column"}
      >
        <Flex border={"1px solid"} height={"40%"}>
          <Image src={profileImage} alt="Profile" />
          <Input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Flex>
        <Flex border={"1px solid"} height={"60%"}>
          {/* all buttons */}
        </Flex>
      </Flex>
      <Flex
        border={"1px solid"}
        height={"100%"}
        width={"77%"}
        flexDirection={"column"}
      >
        <Flex border={"1px solid"} height={"40%"}>
          {/* information 1 */}
        </Flex>
        <Flex border={"1px solid"} height={"40%"}>
          {/* information 2 */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Overall;
