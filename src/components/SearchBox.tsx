import { Button, Flex, Input, Link } from "@chakra-ui/react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store";
import { searchDataActions } from "../../store";
const SearchBox = () => {

  const dispatch = useDispatch();
  const searchDataRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      width="80%"
      height="40%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      // bgColor={'red'}
      // top='40%'
      // left='10%' 

      // border="2px solid"
    >
      {/* <Flex width="100%" justifyContent='space-around'>
        <Flex className="sign">
          <span className="fast-flicker">Sear</span>
          <span>ch</span>
          <span className="flicker">-Here</span>
        </Flex>
      </Flex> */}

      <Flex
        borderRadius="10px"
        height="10vh"
        width="60vw"
        //   border="2px solid"
        justifyContent="center"
        alignItems="center"
        // bgColor="#ffcce6"
        // boxShadow="5px 10px 10px #ff99cc"
      >
        <Input
          type="text"
          width="70%"
          height="60%"
          borderRadius="10px"
          borderStyle="none"
          fontSize="170%"
          color="#9370DB"
          fontFamily="monospace"
          ref={searchDataRef}
          // onSelect={border: '0'}
        ></Input>
        <Button
          height="60%"
          width="10%"
          color="#9370DB"
          borderRadius="10px"
          borderStyle="none"
          _hover={{ color: "white", bgColor: "#9370DB" }}
          onClick={() => {
            dispatch(searchDataActions.searchDataDefiner(searchDataRef.current!.value));
            dispatch(modalActions.searchToggle());
          }}
        >
          <SearchSharpIcon sx={{fontSize: "2rem"}}></SearchSharpIcon>
        </Button>
      </Flex>
    </Flex>
  );
};

export default SearchBox;
