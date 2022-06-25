import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

const Card = ({ children }: any) => {
  const uiState = useSelector((state: any) => state.ui.uiColorCode);

  return (
    <Flex
      width="77vw"
      height="82vh"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      boxShadow={`10px 15px 10px ${uiState.card}`}
      bgColor={uiState.card}
    >
      {children}
    </Flex>
  );
};

export default Card;
