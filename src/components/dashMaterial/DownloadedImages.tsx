import { Box, Flex } from "@chakra-ui/react";
import DownloadEleFrame from "../../ui/DownloadEleFrame";

const DownloadedImages = ({downloadedPhotoIds}) => {
var k= 0;
console.log(downloadedPhotoIds);
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
    {downloadedPhotoIds && downloadedPhotoIds.map((singleData: any) => {
      const id = singleData._id;
      const title = singleData.title;
      const size = singleData.size;
      const date = singleData.date;
      const k++;
      return (
        <DownloadEleFrame
          key={k}
          userId={id}
          title={title}
          size={size}
          date={date}
        ></DownloadEleFrame>
      );
    })}
  </Box>
  );
};

export default DownloadedImages;
