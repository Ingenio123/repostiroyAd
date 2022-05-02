import {
  InputGroup,
  Select,
  InputLeftElement,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
// import Flag from "react-world-flags";
import { HiFlag } from "react-icons/hi";

interface IProps {
  options: Array<any>;
  label: string;
  onChange: any;
  SelectCountry: string | "";
}
// FC<IProps> =
const SelectCountryAndFlags = ({
  SelectCountry,
  label,
  onChange,
  options,
}: IProps) => {
  return (
    <>
      <Box width="100%" position="relative">
        <Text as="label" _hover={{ cursor: "pointer", color: "red" }}>
          {label}
        </Text>
        <Select
          opacity={0}
          height="100%"
          zIndex={1}
          position="absolute"
          top="0"
          left="0"
          value={SelectCountry}
          onChange={onChange}
        >
          <option value="" />
          {options.map((option, index) => (
            <option key={index} value={option.iso}>
              {option.label}
            </option>
          ))}
        </Select>
        <Flex width="30%" alignItems={"center"} mb="1.5">
          {SelectCountry !== "" ? (
            <Box mr="30px" width="10%" flex={1}>
              <img
                height="1rem"
                src={`https://countryflagsapi.com/svg/${SelectCountry}`}
                alt="images flags"
              />
            </Box>
          ) : (
            <></>
            // <HiFlag />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default SelectCountryAndFlags;
