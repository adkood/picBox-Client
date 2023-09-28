import { Flex } from "@chakra-ui/react";

// import { BarChart } from '@mui/x-charts/BarChart';

const BaiscInfo = ({
  resolved,
  unresolved,
  userCount,
  allCount,
  imageCount,
}) => {
  const a = resolved == undefined ? 0 : resolved.length;
  const b = unresolved == undefined ? 0 : unresolved.length;
  const c = userCount == undefined ? 0 : userCount.length;
  const d = (allCount == undefined) ? 0 : allCount.downloadedPhotoIds.length;
  const e = (allCount == undefined) ? 0 : allCount.transactionPhotoIds.length;
  const f = (imageCount == undefined) ? 0 : imageCount.length;
  const total = a + b + c + d + e + f;

  var h1 = 100;
  var h2 = 100;
  var h3 = 100;
  var h4 = 100;
  var h5 = 100;
  var h6 = 100;
  var h7 = 100;
  if (total != 0) {
    h1 = (c / total) * 100;
    h2 = (f / total) * 100;
    h3 = (d / total) * 100;
    h4 = (e / total) * 100;
    h5 = ((a + b) / total) * 100;
    h6 = (a / total) * 100;
    h7 = (b / total) * 100;
  }

  return (
    <Flex width={"100%"} height={"100%"} flexDirection={"column"}>
      <Flex
        width="100%"
        height={"50%"}
        // border={"1px solid"}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width={"80%"}
          height={"90%"}
          borderBottom={"1px solid"}
          justifyContent={"space-around"}
          alignItems={"end"}
        >
          {/* -------------------------------------------- */}
          <Flex border={"1px solid red"} width={"8%"} height={`${h1}%`}>
            no of users
          </Flex>
          <Flex border={"1px solid red"} width={"8%"} height={`${h2}%`}>
            no of images
          </Flex>
          <Flex border={"1px solid red"} width={"8%"} height={`${h3}%`}>
            no of download
          </Flex>
          <Flex border={"1px solid red"} width={"8%"} height={`${h4}%`}>
            no of transaction
          </Flex>
          <Flex border={"1px solid red"} width={"8%"} height={`${h5}%`}>
            total demands
          </Flex>
          <Flex border={"1px solid red"} width={"8%"} height={`${h6}%`}>
            on demand cleared
          </Flex>
          <Flex border={"1px solid red"} width={"8%"} height={`${h7}%`}>
            on demand pending
          </Flex>
          {/* -------------------------------------------- */}
        </Flex>
      </Flex>
      <Flex
        width="100%"
        height={"50%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Number of Users:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{c}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Number of Images Posted:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{f}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Number of Images Downloaded:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{d}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Number of Transaction:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{e}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Total Number of Images Demanded:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{a+b}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Number of Resolved Demands:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{a}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px">
            <span>Number of Unresolved Demands:</span>
          </Flex>
          <Flex width={"40%"} padding="20px">
            <span>{b}</span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BaiscInfo;
