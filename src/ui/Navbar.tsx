import { ReactNode } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  Avatar,
  Link,
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
} from "@chakra-ui/react";
import CollectionModal from "../components/CollectionModal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store";
import { uiActtions } from "../../store";
import { authActions } from "../../store";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const router = useRouter();

  const dispatch = useDispatch();
  const uiState = useSelector((state: any) => state.ui.uiColorCode);
  const darkUi = useSelector((state: any) => state.ui.darkColorMode);

  const colorModeToggle = () => {
    dispatch(uiActtions.colorToggle());
  };

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
    router.replace('/');
  }

  return (
    <>
      <Box
        // bgColor="black"
        bgColor={uiState.navbar}
        height="8%"
        width="77%"
        borderRadius="10px"
        boxShadow={`5px 5px ${uiState.cardShadow}`}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex
          width="100%"
          height="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Avatar
            onClick={() => {
              router.push("/");
            }}
            boxSize="7vh"
            borderRadius= '5px'
            src={"/logo.png"}
          />

          <Flex
            height="100%"
            width="15%"
            alignItems={"center"}
            justifyContent="flex-end"
            flexDirection="row"
          >
            {/* <Button
              width="40%"
              height="40%"
              borderStyle="none"
              bgColor={"transparent"}
              onClick={colorModeToggle}
            >
              {darkUi ? (
                <MoonIcon fontSize="160%" color="black" />
              ) : (
                <SunIcon fontSize="160%" color="white" />
              )}
            </Button> */}

            <Button
              onClick={() => {
                dispatch(modalActions.loginToggle());
              }}
              borderBottom='1px solid'
              borderStyle={'none'}
              bgColor={'transparent'}
              fontSize='130%'
              fontFamily={'monospace'}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                dispatch(modalActions.signupToggle());
              }}
              borderBottom='1px solid'
              borderStyle={'none'}
              bgColor={'transparent'}
              fontSize='130%'
              fontFamily={'monospace'}
            >
              Signup
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                borderRadius='5px'
                borderStyle={'none'}
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
                  borderColor="#BA55D3"
                  _hover={{ bgColor: "#DDA0DD", color: "white" }}
                  color="#BA55D3"
                  onClick={() => {
                    dispatch(modalActions.uploadToggle());
                  }}
                >
                  Upload Images
                </MenuItem>
                <MenuItem
                  borderRadius="5px"
                  borderColor="#BA55D3"
                  _hover={{ bgColor: "#DDA0DD", color: "white" }}
                  color="#BA55D3"
                  onClick={() => {
                    dispatch(modalActions.collectionToggle());
                  }}
                >
                  Your Collections
                </MenuItem>
                <MenuItem
                  borderRadius="5px"
                  borderColor="#BA55D3"
                  _hover={{ bgColor: "#DDA0DD", color: "white" }}
                  color="#BA55D3"
                >
                  <Link href="/account">Account Settings</Link>
                </MenuItem>
                <MenuItem
                  borderRadius="5px"
                  borderColor="#BA55D3"
                  _hover={{ bgColor: "#DDA0DD", color: "white" }}
                  color="#BA55D3"
                  onClick={onLogoutHandler}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
