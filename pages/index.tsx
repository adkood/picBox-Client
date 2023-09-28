import type { NextPage } from "next";
import ClickFrameModal from "../src/components/ClickFrameModal";
import CollectionModal from "../src/components/CollectionModal";
import HomePageArtists from "../src/components/HomePageArtists";
import HomePagePhotos from "../src/components/HomePagePhotos";
import Login from "../src/components/Login";
import SearchBox from "../src/components/SearchBox";
import SearchResultModal from "../src/components/SearchResultModal";
import Signup from "../src/components/Signup";
import UploadModal from "../src/components/UploadModal";
import Container from "../src/ui/Container";
import Navbar from "./../src/ui/Navbar";
import ModalFrame from "../src/ui/ModalFrame";
import GetImageForm from "../src/components/getImage/GetImageForm";
import ChangePassword from "../src/components/ChangePassword";
import OndemandClick from "../src/ui/OndemandClick";
import OndemandUpload from "../src/components/dashMaterial/OndemandUpload";
import UserDeleteModal from "../src/components/dashMaterial/UserDeleteModal";
import RoleUpdateModal from "../src/components/dashMaterial/RoleUpdateModal";
import ImageDeleteModal from "../src/components/dashMaterial/ImageDeleteModal";
// import Overall from "../src/components/accounts/overall";

const Home: NextPage = () => {
  return (
    <>
      <Login></Login>
      <Signup></Signup>
      <Container></Container>
      <HomePagePhotos></HomePagePhotos>
      <HomePageArtists></HomePageArtists>
      <ModalFrame></ModalFrame>
      <UploadModal></UploadModal>
      <CollectionModal></CollectionModal>
      <SearchResultModal></SearchResultModal>
      <ClickFrameModal></ClickFrameModal>
      <GetImageForm></GetImageForm>
      {/* <Overall></Overall> */}
      <ChangePassword></ChangePassword>
      <OndemandClick></OndemandClick>
      <OndemandUpload></OndemandUpload>
      <UserDeleteModal></UserDeleteModal>
      <RoleUpdateModal></RoleUpdateModal>
      <ImageDeleteModal></ImageDeleteModal>
    </>
  );
};

export default Home;
