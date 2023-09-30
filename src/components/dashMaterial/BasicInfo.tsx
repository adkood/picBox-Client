import { Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// import { BarChart } from '@mui/x-charts/BarChart';

const BaiscInfo = () => {
  const [resolved, setResolved] = useState([]);
  const [unresolved, setUnresolved] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [allCount, setAllCount] = useState<any>({});
  const [imageCount, setImageCount] = useState([]);

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);
  const [d, setd] = useState(0);
  const [e, sete] = useState(0);
  const [f, setf] = useState(0);
  const [total, stotal] = useState(0);
  //----------API----------------------------

  const toast = useToast();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const call1 = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/demand/getResolved`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("unable to fetch data2");
        }

        const data = await response.json();
        setResolved(data);
      } catch (err: any) {
        toast({
          title: "Unable to receive data right now",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err.message);
      }
    };

    const call2 = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/demand/getUnresolved`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("unable to fetch data2");
        }

        const data = await response.json();
        setUnresolved(data);
      } catch (err: any) {
        toast({
          title: "Unable to receive data right now",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err.message);
      }
    };

    // useEffect(() => {
    // const url3 = "http://127.0.0.1:8000/api/v1/count/getCount";
    const call3 = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/v1/count/getCount`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("unable to fetch data2");
        }

        const data = await response.json();
        setAllCount(data.data);
      } catch (err: any) {
        toast({
          title: "Unable to receive data right now",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err.message);
      }
    };

    // useEffect(() => {
    // const url4 = "http://127.0.0.1:8000/api/v1/users";
    const call4 = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/v1/users`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("unable to fetch data4");
        }

        const data = await response.json();
        setUserCount(data.data.data);
      } catch (err: any) {
        toast({
          title: "Unable to receive data right now",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err.message);
      }
    };

    // useEffect(() => {
    // const url5 = "http://127.0.0.1:8000/api/v1/photo/getAllPhotos";
    const call5 = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/v1/photo/getAllPhotos`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("unable to fetch data4");
        }

        const data = await response.json();
        setImageCount(data.data.data);
      } catch (err: any) {
        toast({
          title: "Unable to receive data right now",
          description: "We are sorry,Please try again after some time",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(err.message);
      }
    };
    call1();
    call2();
    call3();
    call4();
    call5();

    if (resolved) seta(resolved.length);
    if (unresolved) setb(unresolved.length);
    if (userCount) setc(userCount.length);
    if (allCount && allCount.downloadedPhotoIds)
      setd(allCount.downloadedPhotoIds.length);
    if (allCount && allCount.transactionPhotoIds)
      sete(allCount.transactionPhotoIds.length);
    if (imageCount) setf(imageCount.length);
    stotal(a + b + c + d + e + f);
  }, [
    backendUrl,
    toast,
    allCount,
    imageCount,
    resolved,
    unresolved,
    userCount,
    a,
    b,
    c,
    d,
    e,
    f,
  ]);

  console.log(resolved);
  console.log(unresolved);

const h1 = total !== 0 ? (c / total) * 100 : 0;
const h2 = total !== 0 ? (f / total) * 100 : 0;
const h3 = total !== 0 ? (d / total) * 100 : 0;
const h4 = total !== 0 ? (e / total) * 100 : 0;
const h5 = total !== 0 ? ((a + b) / total) * 100 : 0;
const h6 = total !== 0 ? (a / total) * 100 : 0;
const h7 = total !== 0 ? (b / total) * 100 : 0;

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Flex
        width="90%"
        height={"40%"}
        justifyContent="center"
        // alignItems="center"
      >
        <Flex
          width={"80%"}
          height={"90%"}
          borderBottom={"2px solid #720e9e"}
          justifyContent={"space-around"}
          alignItems={"end"}
        >
          {/* -------------------------------------------- */}
          <Flex
            border={"1px solid red"}
            bgColor={"red.300"}
            width={"8%"}
            height={`${h1}%`}
          >
            Use
          </Flex>
          <Flex
            border={"1px solid orange"}
            bgColor={"orange.300"}
            width={"8%"}
            height={`${h2}%`}
          >
            no of images
          </Flex>
          <Flex
            border={"1px solid pink"}
            bgColor={"pink.300"}
            width={"8%"}
            height={`${h3}%`}
          >
            no of download
          </Flex>
          <Flex
            border={"1px solid green"}
            bgColor={"green.300"}
            width={"8%"}
            height={`${h4}%`}
          >
            no of transaction
          </Flex>
          <Flex
            border={"1px solid blue"}
            bgColor={"blue.300"}
            width={"8%"}
            height={`${h5}%`}
          >
            total demands
          </Flex>
          <Flex
            border={"1px solid yellow"}
            bgColor={"yellow.300"}
            width={"8%"}
            height={`${h6}%`}
          >
            on demand cleared
          </Flex>
          <Flex
            border={"1px solid cyan"}
            bgColor={"cyan.300"}
            width={"8%"}
            height={`${h7}%`}
          >
            on demand pending
          </Flex>
          {/* -------------------------------------------- */}
        </Flex>
      </Flex>
      <Flex
        width="90%"
        height={"50%"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Number of Users:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{c}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Number of Images Posted:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{f}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Number of Images Downloaded:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{d}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Number of Transaction:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{e}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Total Number of Images Demanded:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{a + b}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Number of Resolved Demands:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{a}</span>
          </Flex>
        </Flex>
        <Flex
          width={"90%"}
          height={"13%"}
          border={"1px solid #720e9e"}
          alignItems={"center"}
        >
          <Flex width="60%" padding="20px" fontWeight={"bold"}>
            <span>Number of Unresolved Demands:</span>
          </Flex>
          <Flex width={"40%"} padding="20px" fontWeight={"bold"}>
            <span>{b}</span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BaiscInfo;
