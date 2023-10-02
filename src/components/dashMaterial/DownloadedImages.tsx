import { useToast, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DownloadEleFrame from "../../ui/DownloadEleFrame";

const DownloadedImages = () => {
  // const [allCount, setAllCount] = useState([]);
  const [downloadedPhotoIds, setDownloadedPhotoIds] = useState([]);

  const toast = useToast();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countData] = await Promise.all([
          fetch(`${backendUrl}/api/v1/count/getCount`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
        ]);

        const countJson = await countData.json();

        console.log(countJson.data);
        setDownloadedPhotoIds(countJson.data.downloadedPhotoIds);
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
      {downloadedPhotoIds &&
        downloadedPhotoIds.map((singleData: any) => {
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
