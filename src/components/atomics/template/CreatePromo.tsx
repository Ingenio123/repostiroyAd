import { Stack } from "@chakra-ui/react";
/** Compoenents Organismos Atomi Design */
import { FormCreatePromo } from "../organismos/FormCreatePromo";
import { TablePromo } from "../organismos/TablePromo";
// import {useEffect} from 'react'

const PromoDefault = () => {
  return (
    <Stack direction={"row"}>
      <FormCreatePromo />
      <TablePromo />
    </Stack>
  );
};
export { PromoDefault };
