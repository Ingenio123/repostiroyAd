import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#ECEFF8",
    100: "#CBD3EC",
    200: "#A9B6DF",
    300: "#889AD3",
    400: "#677EC6",
    500: "#4561BA",
    600: "#374E95",
    700: "#293A70",
    800: "#1C274A",
    900: "#0E1325",
  },
  trueGray: {
    "50": "#F2F2F2",
    "100": "#DBDBDB",
    "200": "#C4C4C4",
    "300": "#ADADAD",
    "400": "#969696",
    "500": "#808080",
    "600": "#666666",
    "700": "#4D4D4D",
    "800": "#333333",
    "900": "#1A1A1A",
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
