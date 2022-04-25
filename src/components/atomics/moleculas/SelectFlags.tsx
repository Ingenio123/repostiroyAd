import {
  InputGroup,
  Select,
  InputLeftElement,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FC, ChangeEvent, useState } from "react";
import Flag from "react-world-flags";
import { HiFlag } from "react-icons/hi";

interface IProps {
  options: Array<any>;
}
const SelectCountryAndFlags: FC<IProps> = ({ options }) => {
  const [SelectCountry, setSelectCountry] = useState<string>("");
  const handleChangue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value);
    setSelectCountry(value);
  };
  return (
    <InputGroup width="4rem">
      <Select
        opacity={0}
        height="100%"
        zIndex={1}
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        value={SelectCountry}
        onChange={handleChangue}
      >
        <option value="" />
        {options.map((option) => (
          <option value={option.iso}>{option.label}</option>
        ))}
      </Select>
      <Flex pl="2" width="100%" alignItems={"center"}>
        {SelectCountry !== "" ? (
          <Box mr="4px" width="50%" flex={1}>
            <Flag height="1rem" code={SelectCountry} />
          </Box>
        ) : (
          <HiFlag />
        )}
      </Flex>
    </InputGroup>
  );
};

export default SelectCountryAndFlags;
