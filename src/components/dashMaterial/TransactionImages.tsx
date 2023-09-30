import { Box, Flex, useToast } from "@chakra-ui/react";
import TransactionEleFrame from "../../ui/TransactionEleFrame";
import { useEffect, useState } from "react";

const TransactionImages = () => {

  const [transactionPhotoIds , setTransactionPhotoIds] = useState([]);

  const toast = useToast();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resolvedData, unresolvedData, countData, userData, imageData] =
          await Promise.all([
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
            fetch(`${backendUrl}/api/v1/count/getCount`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }),
            fetch(`${backendUrl}/api/v1/users`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }),
            fetch(`${backendUrl}/api/v1/photo/getAllPhotos`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }),
          ]);

        const countJson = await countData.json();

        console.log(countJson.data);
        setTransactionPhotoIds(countJson.data.downloadedPhotoIds);
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
  }, [toast, backendUrl]);


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
    {transactionPhotoIds && transactionPhotoIds.map((singleData: any) => {
      const id = singleData._id;
      const title = singleData.title;
      const size = singleData.size;
      const name = singleData.name;
      const price = singleData.price;
      const date = singleData.date;
      k++;
      return (
        <TransactionEleFrame
          key={k}
          photoId={id}
          title={title}
          size={size}
          name={name}
          price={price}
          date={date}
        ></TransactionEleFrame>
      );
    })}
  </Box>
  );
};

export default TransactionImages;
