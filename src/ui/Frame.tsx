import { Button, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";

import { useDispatch } from "react-redux";
import { clickFrameActions } from "../../store";

const Frame: React.FC<{
  imageUrl: string;
  width: Number;
  height: Number;
  size: string;
  title: string;
  price: Number;
  discount: Number;
  id: Number;
}> = (props) => {
  // const [style, setStyle] = useState("hidden");
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(clickFrameActions.srcDefiner(props.imageUrl));
    dispatch(clickFrameActions.widthDefiner(props.width));
    dispatch(clickFrameActions.heightDefiner(props.height));
    dispatch(clickFrameActions.sizeDefiner(props.size));
    dispatch(clickFrameActions.priceDefiner(props.price));
    dispatch(clickFrameActions.titleDefiner(props.title));
    dispatch(clickFrameActions.discountDefiner(props.discount));
    dispatch(clickFrameActions.photoIdDefiner(props.id));
    dispatch(clickFrameActions.frameStateToggle());

    const func = async () => {
      let res = await fetch("http://127.0.0.1:8000/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      let data = await res.json();
      let imageArray = data.data.data.boughtImages;

      let wassap = imageArray.find((obj: any) => obj.photoId === props.id);
      let isVisible = true;

      if (wassap) {
        isVisible = false;
      }
      // console.log(isVisible);
      dispatch(clickFrameActions.visibilityDifiner(isVisible));
    };
    func();
  };

  return (
    <Flex
      width="100%"
      height={"100%"}
      _hover={{ width: "110%" }}
      // onMouseEnter={() => {
      //   setStyle("visible");
      // }}
      // onMouseLeave={() => {
      //   setStyle("hidden");
      // }}
      onClick={onToggle}
    >
      <Image
        boxShadow="0 0 10px rgba(0, 0, 0, 0.3)" /* Drop shadow for depth */
        borderRadius="10px"
        padding="2px"
        width="100%"
        src={props.imageUrl}
        alt="loading..."
      ></Image>
      {/* <Button
        visibility={`${style}`}
        position={"absolute"}
        height="5%"
        width="5%"
        borderStyle={"none"}
        borderRadius="5px"
        bgColor="#68BBE3"
        onClick={downloadImage}
      >
        <DownloadIcon color="primary" fontSize="large"></DownloadIcon>
      </Button> */}
    </Flex>
  );
};

export default Frame;
