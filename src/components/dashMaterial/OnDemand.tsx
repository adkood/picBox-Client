import { Box, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OndemandFrame from "../../ui/OndemandFrame";
import { useSelector } from "react-redux";

const OnDemand = () => {
  const [resolved, setResolved] = useState([]);
  const [unresolved, setUnresolved] = useState([]);
  const isResolvedCounter = useSelector((state: any) => state.render.isResolved);

  const toast = useToast();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resolvedData, unresolvedData] = await Promise.all([
          fetch(`${backendUrl}/api/v1/demand/getResolved`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
          fetch(`${backendUrl}/api/v1/demand/getUnresolved`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

        const resolvedJson = await resolvedData.json();
        const unresolvedJson = await unresolvedData.json();

        setResolved(resolvedJson);
        setUnresolved(unresolvedJson);
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
  }, [toast, backendUrl, isResolvedCounter]);

  var k = 0;
  return (
    <Box
      width={"95%"}
      height={"90%"}
      border={"2px solid #720e9e"}
      borderRadius={"3px"}
      overflow="scroll"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {unresolved.map((singleData: any) => {
        const id = singleData._id;
        const firstName = singleData.firstName;
        const lastName = singleData.lastName;
        const email = singleData.email;
        const country = singleData.country;
        const street = singleData.street;
        const city = singleData.city;
        const social = singleData.social;
        const imageDesc = singleData.imageDesc;
        const isResolved = singleData.isResolved;
        k++;
        return (
          <OndemandFrame
            key={k}
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            country={country}
            street={street}
            city={city}
            social={social}
            imageDesc={imageDesc}
            isResolved={isResolved}
          ></OndemandFrame>
        );
      })}
      {resolved.map((singleData: any) => {
        const id = singleData._id;
        const firstName = singleData.firstName;
        const lastName = singleData.lastName;
        const email = singleData.email;
        const country = singleData.country;
        const street = singleData.street;
        const city = singleData.city;
        const social = singleData.social;
        const imageDesc = singleData.imageDesc;
        const isResolved = singleData.isResolved;
        k++;
        return (
          <OndemandFrame
            key={k}
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            country={country}
            street={street}
            city={city}
            social={social}
            imageDesc={imageDesc}
            isResolved={isResolved}
          ></OndemandFrame>
        );
      })}
    </Box>
  );
};

export default OnDemand;
