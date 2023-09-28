import { Box } from "@chakra-ui/react"
import ImageFrame from "../../ui/ImageFrame";

const AllImages = ({imageCount}) => {
  console.log(imageCount);
    var k = 0;
    return (
        <Box
          width={"95%"}
          height={"90%"}
          border={"2px solid #720e9e"}
          borderRadius={"3px"}
          overflow="scroll"
          flexDirection={"column"}
          css = "::-webkit-scrollbar {
              width: 0px
            }"
        >
          {imageCount.map((singleData: any) => {
            const id = singleData._id;
            const title = singleData.title;
            const size = singleData.size;
            const price = singleData.price;
            const discount= singleData.priceDiscount;
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
      );
}

export default AllImages;
