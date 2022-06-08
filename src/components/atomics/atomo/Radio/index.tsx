import { Box, Center, useRadio, UseRadioProps } from "@chakra-ui/react";

const Radio: React.FC<UseRadioProps> = (props): JSX.Element => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  return (
    <Box
      as="label"
      border="1px solid"
      borderColor="inputBorder"
      py="1rem"
      borderRadius="0.5rem"
      fontWeight="bold"
      fontSize="0.875rem"
      pl="3.25rem"
      position="relative"
      cursor="pointer"
      display="inline-block"
      width="30%"
      sx={{
        "input:checked + div::after": {
          transform: "scale(1)",
        },
        "&:focus-within": {
          borderColor: "#1363DF",
        },
      }}
    >
      <input {...getInputProps()} hidden />
      <Center
        {...getCheckboxProps()}
        width="20px"
        height="20px"
        border="1px solid"
        borderColor="inputBorder"
        borderRadius="50%"
        position="absolute"
        left="1rem"
        _after={{
          content: "''",
          position: "absolute",
          bg: "#1363DF",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "transform 0.3s linear",
        }}
      ></Center>
      {props.children}
    </Box>
  );
};

export default Radio;
