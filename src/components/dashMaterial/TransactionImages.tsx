import { Box, Flex } from "@chakra-ui/react";
import TransactionEleFrame from "../../ui/TransactionEleFrame";


const TransactionImages = ({transactionPhotoIds}) => {
var k = 0;
console.log(transactionPhotoIds);
  return (
    <Box
    width={"95%"}
    height={"90%"}
    border={"1px solid green"}
    overflow="scroll"
    flexDirection={"column"}
    css = "::-webkit-scrollbar {
        width: 0px
      }"
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
