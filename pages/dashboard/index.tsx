import { Button, Flex, useToast } from "@chakra-ui/react";
import BaiscInfo from "../../src/components/dashMaterial/BasicInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import AllUsers from "../../src/components/dashMaterial/AllUsers";
import AllImages from "../../src/components/dashMaterial/AllImages";
import DownloadedImages from "../../src/components/dashMaterial/DownloadedImages";
import TransactionImages from "../../src/components/dashMaterial/TransactionImages";
import OnDemand from "../../src/components/dashMaterial/OnDemand";
import OndemandClick from "../../src/ui/OndemandClick";
import OndemandUpload from "../../src/components/dashMaterial/OndemandUpload";
import UserDeleteModal from "../../src/components/dashMaterial/UserDeleteModal";
import RoleUpdateModal from "../../src/components/dashMaterial/RoleUpdateModal";
import ImageDeleteModal from "../../src/components/dashMaterial/ImageDeleteModal";

const DashBoard = () => {
  const [resolved, setResolved] = useState([]);
  const [unresolved, setUnresolved] = useState([]);
  const [userCount, setUserCount] = useState([]);
  const [allCount, setAllCount] = useState([]);
  const [imageCount, setImageCount] = useState([]);

  const toast = useToast();

  // ----------------CALLING SEASON-----------
  useEffect(() => {
    const call1 = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/demand/getResolved",
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
          "http://127.0.0.1:8000/api/v1/demand/getUnresolved",
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
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/count/getCount",
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
        const response = await fetch("http://127.0.0.1:8000/api/v1/users", {
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
          "http://127.0.0.1:8000/api/v1/photo/getAllPhotos",
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
  }, []);

  // console.log(resolved);
  console.log(imageCount);
  // console.log(resolved.length);

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex width={"70%"} height={"80%"} border={"1px solid green"}>
        <Flex
          width={"22%"}
          height={"100%"}
          border={"1px solid"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Basic Information
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            All Users
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            All Images
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Download Information
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Transaction Information
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid"}
            marginTop={"10px"}
          >
            Check On-Demand Information
          </Flex>
        </Flex>
        <Flex
          width={"78%"}
          height={"100%"}
          border={"1px solid"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* -------------MODALS-------------------------- */}

          <OndemandClick></OndemandClick>
          <OndemandUpload></OndemandUpload>
          <UserDeleteModal></UserDeleteModal>
          <RoleUpdateModal></RoleUpdateModal>
          <ImageDeleteModal></ImageDeleteModal>

          {/* ----------------------------------------------------------- */}

          {/* <BaiscInfo
            resolved={resolved}
            unresolved={unresolved}
            userCount={userCount}
            allCount={allCount}
            imageCount={imageCount}
          ></BaiscInfo> */}
          {/* <AllUsers userCount={userCount}></AllUsers> */}
          <AllImages imageCount={imageCount}></AllImages>
          {/* <DownloadedImages
            downloadedPhotoIds={allCount.downloadedPhotoIds}
          ></DownloadedImages> */}
          {/* <TransactionImages
            transactionPhotoIds={allCount.transactionPhotoIds}
          ></TransactionImages> */}
          {/* <OnDemand resolved={resolved} unresolved={unresolved}></OnDemand> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
