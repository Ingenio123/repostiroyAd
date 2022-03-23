import { Stack, Divider } from "@chakra-ui/react";
import FormCuponCode from "../organismos/FormCupon";
import SearchMolecula from "../moleculas/SearchMolecula";
import HeaderCodesMolecula from "../moleculas/HeaderCodesMolecula";
import GirdBodyMolecula from "../moleculas/GridBodyMolecula";

const CuponCodePage = (): JSX.Element => {
  return (
    <Stack width="100%" spacing="24px" direction="row">
      <FormCuponCode />
      <div>
        <SearchMolecula
          placeholder="Search code"
          type="text"
          label="Search Code"
        />
        {/* <Divider orientation="horizontal" my="1rem" /> */}
        <GirdBodyMolecula />
      </div>
    </Stack>
  );
};

export default CuponCodePage;
