import React, { useState, useEffect } from "react";
import { Box, useToast } from "@chakra-ui/react";
import UserFrame from "../../ui/UserFrame";
import { useSelector } from "react-redux";

const AllUsers = () => {
  const [userCount, setUserCount] = useState<any>([]);

  const isUserDelete = useSelector((state: any) => state.render.isUserDelete);

  const toast = useToast();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData] = await Promise.all([
          fetch(`${backendUrl}/api/v1/users`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

        const userJson = await userData.json();
        setUserCount(userJson.data.data);
      } catch (err: any) {
        toast({
          title: "Unable to receive data right now",
          description: "We are sorry, please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.error(err.message);
      }
    };

    fetchData();
  }, [toast, backendUrl, isUserDelete]);

  var k = 0;
  return (
    <Box
      width={"95%"}
      height={"90%"}
      border={"2px solid #720e9e"}
      borderRadius={"3px"}
      overflow="scroll"
      flexDirection={"column"}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {userCount.map((singleData: any) => {
        const id = singleData._id;
        const name = singleData.name;
        const email = singleData.email;
        const role = singleData.role;
        const profession = singleData.profession;
        k++;
        return (
          <UserFrame
            key={k}
            userId={id}
            name={name}
            email={email}
            profession={profession}
            role={role}
          ></UserFrame>
        );
      })}
    </Box>
  );
};

export default AllUsers;
