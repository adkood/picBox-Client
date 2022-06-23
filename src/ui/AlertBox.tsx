import { Flex } from "@chakra-ui/react";

const AlertBox:React.FC<{isErr: Boolean , msg: String}> = (props) => {
  return (
    <Flex
      padding={"20px"}
      color="white"
      backgroundColor={props.isErr ? "#f44336" : "lightgreen"}
      marginBottom="15px"
    >
      <span>&times;</span>
      {props.msg}
    </Flex>
  );
};

export default AlertBox;
