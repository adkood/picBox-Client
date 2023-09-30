import { Flex, Heading } from "@chakra-ui/react";

interface TransactionProps {
  photoId: string;
  title: string;
  size: any;
  name: string;
  price: number;
  date: any;
}

const TransactionEleFrame: React.FC<TransactionProps> = ({
  photoId,
  title,
  size,
  name,
  price,
  date,
}) => {
  return (
    <Flex width={"100"} height={"20"} border={"1px solid"} margin={"5px"}>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"20%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Id</Heading>
          <span>
            <b>{photoId}</b>
          </span>
        </Flex>
        <Flex
          width={"13%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Title</Heading>
          <span>
            <b>{title}</b>
          </span>
        </Flex>
        <Flex
          width={"11%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Size</Heading>
          <span>
            <b>{size}</b>
          </span>
        </Flex>
        <Flex
          width={"10%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Price(Rs.)</Heading>
          <span>
            <b>{price}</b>
          </span>
        </Flex>
        <Flex
          width={"15%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Bought By</Heading>
          <span>
            <b>{name}</b>
          </span>
        </Flex>
        <Flex
          width={"17%"}
          height={"90%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="1.1rem">Bought On</Heading>
          <span>
            <b>{date}</b>
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TransactionEleFrame;
