import { ReactNode } from "react";
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
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import { BiSun, BiMoon } from "react-icons/bi";
import LogoIngenio from "../../assets/images/IngenioLanguages.svg";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    rounded={"md"}
    display="flex"
    justifyContent="center"
    alignItems="center"
    px="2"
    lineHeight="normal"
    fontWeight="medium"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Image src={LogoIngenio} alt="img of logo" />
        </Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <NavLink>Teachers</NavLink>
            <NavLink>Coupons</NavLink>
            <NavLink>Course Content</NavLink>
            <NavLink>Students</NavLink>
            <NavLink>Reviews</NavLink>
            <NavLink>Lesson Packages</NavLink>
            {/* <NavLink>Lesson Packages</NavLink>
            <NavLink>Lesson Packages</NavLink> */}
            {/* maximum two (2) links/menu  */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <BiMoon /> : <BiSun />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              {/* <MenuList alignItems={"center"}>
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
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList> */}
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
