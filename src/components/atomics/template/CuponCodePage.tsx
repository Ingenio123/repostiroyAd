import { Stack, Heading } from "@chakra-ui/react";
import FormCuponCode from "../organismos/FormCupon";
import SearchMolecula from "../moleculas/SearchMolecula";
import HeaderCodesMolecula from "../moleculas/HeaderCodesMolecula";
import GirdBodyMolecula from "../moleculas/GridBodyMolecula";
import { TableMolecula } from "../moleculas/TableMolecula";
import FormLegend from "../atomo/FormLegend";

const CuponCodePage = (): JSX.Element => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "1.75rem" }}
        mb={{ base: "2rem" }}
        textAlign="center"
      >
        Manage Coupons
      </Heading>
      <Stack width="100%" spacing="24px" direction="row">
        <FormCuponCode />
        <div>
          <FormLegend>Update coupons</FormLegend>
          <SearchMolecula
            placeholder="Search coupon name"
            type="text"
            label="Search coupon"
          />
          {/* <Divider orientation="horizontal" my="1rem" /> */}
          <GirdBodyMolecula />
        </div>
      </Stack>
    </>
  );
};

export default CuponCodePage;
