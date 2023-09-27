import { Flex, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { demandActions } from "../../store";

const OndemandFrame = ({
  id,
  firstName,
  lastName,
  email,
  country,
  street,
  city,
  social,
  imageDesc,
  isResolved,
}) => {
  console.log(isResolved);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(demandActions.demandStateToggle());
    dispatch(demandActions.idDefiner(id));
    dispatch(demandActions.firstDefiner(firstName));
    dispatch(demandActions.lastDefiner(lastName));
    dispatch(demandActions.emailDefiner(email));
    dispatch(demandActions.countryDefiner(country));
    dispatch(demandActions.cityDefiner(city));
    dispatch(demandActions.socialDefiner(social));
    dispatch(demandActions.imageDescDefiner(imageDesc));
    dispatch(demandActions.isResolvedDifiner(isResolved));
  };

  return (
    <Flex
      width={"98%"}
      height={"15%"}
      margin="5px"
      borderRadius={"5px"}
      border={"1px solid"}
      margin={"5px"}
      onClick={onClickHandler}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Flex
          width={"17%"}
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <span>ID</span>
          <span>{id}</span>
        </Flex>
        <Flex
          width={"16%"}
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <span>Demanded By</span>
          <span>
            {firstName} {lastName}
          </span>
        </Flex>
        <Flex
          width={"13%"}
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <span>Email</span>
          <span>{email}</span>
        </Flex>
        <Flex
          width={"6%"}
          height={"100%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <span>Country</span>
          <span>{country}</span>
        </Flex>
        <Flex
          width={"15%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {isResolved && (
            <Heading fontSize={"2rem"} color={"green"}>
              Resolved
            </Heading>
          )}
          {!isResolved && (
            <Heading fontSize={"2rem"} color={"red"}>
              Unresolved
            </Heading>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OndemandFrame;
