import { ReactNode } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  // Link,
  Heading,
} from "@chakra-ui/react";
import CollectionModal from "../components/CollectionModal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store";
import { uiActtions } from "../../store";
import { authActions } from "../../store";

import { PlusSquareIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const router = useRouter();

  const dispatch = useDispatch();
  const uiState = useSelector((state: any) => state.ui.uiColorCode);
  // const darkUi = useSelector((state: any) => state.ui.darkColorMode);
  const authState = useSelector((state: any) => state.auth.isLogged);
  const role = useSelector((state: any) => state.auth.role);
  const back = useSelector((state: any) => state.auth.back);
  console.log(back);
  const colorModeToggle = () => {
    dispatch(uiActtions.colorToggle());
  };

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    router.replace("/");
  };

  return (
    <>
      <Box
        // bgColor="black"
        // background="linear-gradient(to right, #ff6b6b, #6b47ff)"
        border={"1px solid white"}
        height="8%"
        width="77%"
        borderRadius="10px"
        // boxShadow={`5px 5px`}
        bg={"linear-gradient(to right, #ff6b6b, #6b47ff)"}
        px={4}
      >
        <Flex
          width="100%"
          height="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar
            height="70%"
            width="70px"
            onClick={() => {
              router.push("/");
            }}
            borderRadius="5px"
            src={"/logo.png"}
          />

          <Flex
            height="100%"
            width="35%"
            alignItems={"center"}
            justifyContent="flex-end"
            flexDirection="row"
          >
            {role && !back && (
              <Link href="/dashboard">
                <Flex
                  onClick={() => dispatch(authActions.backToggle())}
                  justifyContent="center"
                  alignItems="center"
                  m="3"
                  _hover={{ cursor: "pointer" }}
                >
                  <PlusSquareIcon
                    sx={{ fontSize: "2.3rem", color: "white" }}
                  ></PlusSquareIcon>
                  <Heading fontSize="1.2rem" color="white">
                    Dashboard
                  </Heading>
                </Flex>
              </Link>
            )}
            {role && back && (
              <Link href="/">
                <ArrowBackIcon
                  m="4"
                  onClick={() => dispatch(authActions.backToggle())}
                  sx={{ fontSize: "3rem", color: "white" }}
                ></ArrowBackIcon>
              </Link>
            )}

            {!authState && (
              <Button
                onClick={() => {
                  dispatch(modalActions.loginToggle());
                }}
                borderBottom="1px solid"
                borderStyle={"none"}
                bgColor={"transparent"}
                fontSize="130%"
                fontFamily={"monospace"}
              >
                Login
              </Button>
            )}
            {!authState && (
              <Button
                onClick={() => {
                  dispatch(modalActions.signupToggle());
                }}
                borderBottom="1px solid"
                borderStyle={"none"}
                bgColor={"transparent"}
                fontSize="130%"
                fontFamily={"monospace"}
              >
                Signup
              </Button>
            )}
            {authState && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  borderRadius="5px"
                  borderStyle={"none"}
                >
                  <Avatar
                    boxSize="6vh"
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"} zIndex={5}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem
                    borderRadius="5px"
                    borderColor="#9370DB"
                    _hover={{ bgColor: "#9370DB", color: "white" }}
                    color="#9370DB"
                    onClick={() => {
                      dispatch(modalActions.uploadToggle());
                    }}
                  >
                    Upload Images
                  </MenuItem>
                  <MenuItem
                    borderRadius="5px"
                    borderColor="#9370DB"
                    _hover={{ bgColor: "#9370DB", color: "white" }}
                    color="#9370DB"
                    onClick={() => {
                      dispatch(modalActions.collectionToggle());
                    }}
                  >
                    Your Collections
                  </MenuItem>
                  <MenuItem
                    borderRadius="5px"
                    borderColor="#9370DB"
                    _hover={{ bgColor: "#9370DB", color: "white" }}
                    color="#9370DB"
                    onClick={() => {
                      dispatch(modalActions.accountToggle());
                    }}
                  >
                    Account Settings
                  </MenuItem>
                  <MenuItem
                    borderRadius="5px"
                    borderColor="#9370DB"
                    _hover={{ bgColor: "#9370DB", color: "white" }}
                    color="#9370DB"
                    onClick={onLogoutHandler}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
