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
import UploadModal from "../../src/components/UploadModal";
import CollectionModal from "../../src/components/CollectionModal";
import ChangePassword from "../../src/components/ChangePassword";
import Navbar from "../../src/ui/Navbar";
import Intro from "../../src/components/dashMaterial/Intro";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../store";

const DashBoard = () => {
  const [userCount, setUserCount] = useState([]);
  const [allCount, setAllCount] = useState<any>({});
  const [imageCount, setImageCount] = useState([]);

  const dispatch = useDispatch();

  const intro = useSelector((state: any) => state.dashboard.intro);
  const basic = useSelector((state: any) => state.dashboard.basic);
  const users = useSelector((state: any) => state.dashboard.users);
  const images = useSelector((state: any) => state.dashboard.images);
  const download = useSelector((state: any) => state.dashboard.download);
  const transaction = useSelector((state: any) => state.dashboard.transaction);
  const demand = useSelector((state: any) => state.dashboard.demand);

  const toast = useToast();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  // ----------------CALLING SEASON-----------
  // useEffect(() => {
  //   const call1 = async () => {
  //     try {
  //       const response = await fetch(
  //         `${backendUrl}/api/v1/demand/getResolved`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("unable to fetch data2");
  //       }

  //       const data = await response.json();
  //       setResolved(data);
  //     } catch (err: any) {
  //       toast({
  //         title: "Unable to receive data right now",
  //         description: "We are sorry,Please try again after some time",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       console.log(err.message);
  //     }
  //   };

  //   const call2 = async () => {
  //     try {
  //       const response = await fetch(
  //         `${backendUrl}/api/v1/demand/getUnresolved`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("unable to fetch data2");
  //       }

  //       const data = await response.json();
  //       setUnresolved(data);
  //     } catch (err: any) {
  //       toast({
  //         title: "Unable to receive data right now",
  //         description: "We are sorry,Please try again after some time",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       console.log(err.message);
  //     }
  //   };

  //   // useEffect(() => {
  //   // const url3 = "http://127.0.0.1:8000/api/v1/count/getCount";
  //   const call3 = async () => {
  //     try {
  //       const response = await fetch(`${backendUrl}/api/v1/count/getCount`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("unable to fetch data2");
  //       }

  //       const data = await response.json();
  //       setAllCount(data.data);
  //     } catch (err: any) {
  //       toast({
  //         title: "Unable to receive data right now",
  //         description: "We are sorry,Please try again after some time",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       console.log(err.message);
  //     }
  //   };

  //   // useEffect(() => {
  //   // const url4 = "http://127.0.0.1:8000/api/v1/users";
  //   const call4 = async () => {
  //     try {
  //       const response = await fetch(`${backendUrl}/api/v1/users`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("unable to fetch data4");
  //       }

  //       const data = await response.json();
  //       setUserCount(data.data.data);
  //     } catch (err: any) {
  //       toast({
  //         title: "Unable to receive data right now",
  //         description: "We are sorry,Please try again after some time",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       console.log(err.message);
  //     }
  //   };

  //   // useEffect(() => {
  //   // const url5 = "http://127.0.0.1:8000/api/v1/photo/getAllPhotos";
  //   const call5 = async () => {
  //     try {
  //       const response = await fetch(
  //         `${backendUrl}/api/v1/photo/getAllPhotos`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("unable to fetch data4");
  //       }

  //       const data = await response.json();
  //       setImageCount(data.data.data);
  //     } catch (err: any) {
  //       toast({
  //         title: "Unable to receive data right now",
  //         description: "We are sorry,Please try again after some time",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       console.log(err.message);
  //     }
  //   };
  //   call1();
  //   call2();
  //   call3();
  //   call4();
  //   call5();
  // }, [backendUrl, toast]);

  // console.log(resolved);
  console.log(allCount);
  // console.log(resolved.length);

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Navbar></Navbar>
      <Flex
        marginBottom={"10vh"}
        width={"77%"}
        height={"80%"}
        border={"1px solid #720e9e"}
        color={"#720e9e"}
        borderRadius={"3px"}
      >
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
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.introToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            WELCOME
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.basicToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            BASIC INFORMATION
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.usersToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            ALL USERS
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.imagesToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            ALL IMAGES
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.downloadToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            DOWNLOAD INFORMATION
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.transactionToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            TRANSACTION INFORMATION
          </Flex>
          <Flex
            width={"95%"}
            height={"9%"}
            border={"1px solid #720e9e"}
            color={"#720e9e"}
            marginTop={"10px"}
            onClick={() => {
              dispatch(dashboardActions.demandToggle());
            }}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            cursor={"pointer"}
            bgColor={"#D8BFD8"}
          >
            CHECK ON-DEMAND INFORMATION
          </Flex>
        </Flex>
        <Flex
          width={"78%"}
          height={"100%"}
          border={"1px solid #720e9e"}
          color={"#720e9e"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* -------------MODALS-------------------------- */}
          {/* <ModalFrame></ModalFrame> */}
          <UploadModal></UploadModal>
          <CollectionModal></CollectionModal>
          {/* <SearchResultModal></SearchResultModal> */}
          {/* <ClickFrameModal></ClickFrameModal> */}
          {/* <GetImageForm></GetImageForm> */}
          {/* <Overall></Overall> */}
          <ChangePassword></ChangePassword>
          <OndemandClick></OndemandClick>
          <OndemandUpload></OndemandUpload>
          <UserDeleteModal></UserDeleteModal>
          <RoleUpdateModal></RoleUpdateModal>
          <ImageDeleteModal></ImageDeleteModal>

          {/* ----------------------------------------------------------- */}
          {intro && <Intro></Intro>}
          {basic && <BaiscInfo></BaiscInfo>}
          {users && <AllUsers></AllUsers>}
          {images && <AllImages ></AllImages>}
          {/* {download && (
            <DownloadedImages
              
            ></DownloadedImages>
          )}
          {transaction && (
            <TransactionImages
            ></TransactionImages>
          )} */}
          {demand && <OnDemand></OnDemand>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoard;
