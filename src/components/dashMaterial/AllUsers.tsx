import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import UserFrame from "../../ui/UserFrame";

const AllUsers = ({ userCount }) => {
  var k = 0;
  return (
    <Box
      width={"95%"}
      height={"90%"}
      border={"1px solid red"}
      overflow="scroll"
      flexDirection={"column"}
      css = "::-webkit-scrollbar {
          width: 0px
        }"
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
