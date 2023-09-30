import { Button, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { clickFrameActions, confirmationActions } from "../../store";

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

  const role = useSelector((state: any) => state.auth.role);
  const isLoggedIn = useSelector((state: any) => state.auth.isLogged);

  const deleteToggle = (e: any) => {
    e.stopPropagation();
    dispatch(confirmationActions.photoIdDefiner(props.id));
    dispatch(confirmationActions.imageDeleteStateToggle());
  };

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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
      try {
        let res = await fetch(`${backendUrl}/api/v1/users/me`, {
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
        dispatch(clickFrameActions.visibilityDifiner(isVisible));
      } catch (error) {
        console.log(error);
      }
    };

    func();
  };

  console.log(role);
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
      position="relative"
      onClick={onToggle}
    >
      <Image
        boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
        borderRadius="10px"
        padding="2px"
        // zIndex={"-5"}
        width="100%"
        src={props.imageUrl}
        alt="loading..."
      ></Image>
      {isLoggedIn && role == "admin" && (
        <Flex
          onClick={deleteToggle}
          position={"absolute"}
          _hover={{ cursor: "pointer" }}
        >
          <DeleteIcon
            margin={"1.5"}
            color={"red.500"}
            sx={{ fontSize: "2rem" }}
          ></DeleteIcon>
        </Flex>
      )}
    </Flex>
  );
};

export default Frame;
