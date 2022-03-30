import { Stack, Heading, useToast } from "@chakra-ui/react";
import FormCuponCode from "../organismos/FormCupon";
import SearchMolecula from "../moleculas/SearchMolecula";
import GirdBodyMolecula from "../moleculas/GridBodyMolecula";
import FormLegend from "../atomo/FormLegend";
import di from "../../../di";
import { useCodeCuponListState } from "../../../hooks/CuponCodeRecoil";

const CuponCodePage = (): JSX.Element => {
  //
  const [list, setList] = useCodeCuponListState();
  const toast = useToast();

  //
  const insertCuponFnc = async (
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ) => {
    const resStatus = await di.cupon.addCuponCode(
      codigo,
      discont,
      numero_usos,
      dateExpires
    );
    if (resStatus) {
      toast({
        title: "Successful",
        description: "Your coupon has been created",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      console.log(
        "##################### ADD SUCCESSFULLY ###########################"
      );
    }
  };
  const deleteCoupon = async (id: string) => {
    console.log("Delete coupon" + id);
    di.cupon.delete(id);
    const coupons = list.filter((coupon) => coupon._id !== id);
    setList(coupons);
    toast({
      title: "Successful.",
      description: "This coupon has been deleted",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize="3xl"
        lineHeight="normal"
        mt="2rem"
        textAlign="center"
      >
        Manage Coupons
      </Heading>
      <Stack width="100%" mt="30px" spacing="24px" direction="row">
        <FormCuponCode insertCuponFnc={insertCuponFnc} />
        <div>
          <FormLegend>View or delete coupons </FormLegend>

          <GirdBodyMolecula deleteCoupon={deleteCoupon} />
        </div>
      </Stack>
    </>
  );
};

export default CuponCodePage;
