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
    </>
  );
};

export default Home;
