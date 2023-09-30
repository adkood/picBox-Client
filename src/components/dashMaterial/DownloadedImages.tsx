import { Box, Flex } from "@chakra-ui/react";
import DownloadEleFrame from "../../ui/DownloadEleFrame";

const DownloadedImages = ({downloadedPhotoIds}) => {
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
    {downloadedPhotoIds && downloadedPhotoIds.map((singleData: any) => {
      const id = singleData._id;
      const title = singleData.title;
      const size = singleData.size;
      const date = singleData.date;
      k++;
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
