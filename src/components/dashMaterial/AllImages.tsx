import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import ImageFrame from "../../ui/ImageFrame";
import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import axios from "axios";

const AllImages = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const option1 = [
    { value: "price", label: "Price(Rs)" },
    { value: "size", label: "Size(KB)" },
    { value: "discount", label: "Discount(%)" },
  ];

  const option2 = [
    { value: "asc", label: "Ascending" },
    { value: "dsc", label: "Descending" },
  ];

  const handleSelectChange1 = (event: any) => {
    setSelectedValue1(event.target.value);
  };
  const handleSelectChange2 = (event: any) => {
    setSelectedValue2(event.target.value);
  };

  console.log(selectedValue1, selectedValue2);
  var k = 0;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleApi = () => {
    const url = `${backendUrl}/api/v1/photo/sort?field=${selectedValue1}&order=${selectedValue2}`;
    axios({
      url,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        setDataToShow(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // handleApi();
  }, [dataToShow]);

  // const [imageCount, setImageCount] = useState([]);

  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imageData] = await Promise.all([
          fetch(`${backendUrl}/api/v1/photo/getAllPhotos`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

        const imageJson = await imageData.json();
        setDataToShow(imageJson.data.data);
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

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex width={"95%"} justifyContent={"flex-end"} mb={"2"}>
        <Select
          bgColor={"purple.100"}
          width={"13%"}
          color={"#720e9e"}
          fontWeight={"bold"}
          placeholder="Sort By"
          value={selectedValue1}
          onChange={handleSelectChange1}
        >
          {option1.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Select
          bgColor={"purple.100"}
          width={"13%"}
          color={"#720e9e"}
          fontWeight={"bold"}
          placeholder="Order"
          value={selectedValue2}
          onChange={handleSelectChange2}
        >
          {option2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Button
          bgColor={"purple.300"}
          width={"11%"}
          color={"white"}
          _hover={{ color: "purple.300", bgColor: "white" }}
          onClick={handleApi}
          fontWeight={"bold"}
        >
          APPLY
        </Button>
      </Flex>
      <Box
        width={"95%"}
        height={"85%"}
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
        {dataToShow.map((singleData: any) => {
          const id = singleData._id;
          const title = singleData.title;
          const size = singleData.size;
          const price = singleData.price;
          const discount = singleData.priceDiscount;
          const auther = singleData.author[0].name;
          k++;
          return (
            <ImageFrame
              key={k}
              userId={id}
              title={title}
              size={size}
              price={price}
              discount={discount}
              auther={auther}
            ></ImageFrame>
          );
        })}
      </Box>
    </Flex>
  );
};

export default AllImages;
