import { Box } from "@chakra-ui/react";
import OndemandFrame from "../../ui/OndemandFrame";

const OnDemand = ({ unresolved, resolved}) => {
  console.log(unresolved, resolved);
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
