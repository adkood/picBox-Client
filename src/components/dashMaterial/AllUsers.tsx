import React from "react";
import { Box } from "@chakra-ui/react";
import UserFrame from "../../ui/UserFrame";

interface userData {
  _id: string;
  name: string;
  email: String;
  profession: String;
  role: String;
}

interface AllUsersProps {
  userCount: userData[];
}

const AllUsers:React.FC<AllUsersProps> = ({ userCount }) => {
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
      {userCount.map((singleData) => {
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
