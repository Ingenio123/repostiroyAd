import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdModeNight } from "react-icons/md";
function ThemeSelector() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4}>
      <IconButton
        icon={colorMode === "light" ? <MdModeNight /> : <MdLightMode />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Button Mode "
      />
    </Box>
  );
}

export default ThemeSelector;
