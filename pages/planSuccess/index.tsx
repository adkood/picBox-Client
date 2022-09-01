import { Button, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const Success = () => {
  const router = useRouter();
  const { userId, plan } = router.query;
  console.log("--------------------->",userId , plan);

  //api

  useEffect(() => {
    const func = async () => {
      let res = await fetch("http://127.0.0.1:8000/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      let data = await res.json();
      // console.log(data);
      data.data.data.planActive = true;
      if(plan === '1')
      {
        data.data.data.planCount += 5;
      }
      else if(plan === '2')
      {
        data.data.data.planCount += 15;
      }
      else
      {
        data.data.data.planCount += 30;
      }

      // console.log(data.data.data);
      
      const url = "http://127.0.0.1:8000/api/v1/users/updateMe";
      axios({
        url,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data.data.data,
      })
        .then((res) => {
          // console.log(res);
        })
        .catch((error) => {
          // console.log(error);
        });
    };
    func();
  });

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      bgColor="lightgreen"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Heading fontSize={"400%"}>PAYMENT SUCCESSFUL!</Heading>
      <Button>Return to Home</Button>
    </Flex>
  );
};

export default Success;
