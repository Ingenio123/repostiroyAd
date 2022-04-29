import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#314584",
    800: "#374d95",
    700: "#3e57a8",
    500: "#314584",
  },
  inputError: "#EF4444",
  inputBorder: "#A1A1AA",
};
const components = {
  Button: {
    variants: {
      personalizado: {
        bg: "red.300",
        _hover: {
          bg: "red.500",
        },
      },
    },
  },
};

export default extendTheme({ colors, components });
