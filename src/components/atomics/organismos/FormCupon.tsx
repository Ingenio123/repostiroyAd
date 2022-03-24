import { useState } from "react";
//libarys
import { useForm } from "react-hook-form";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";

//atomos
import FormLegend from "../atomo/FormLegend";
import DatePickerAtom from "../atomo/DatePicker";
//organismos
//moleculas
import FormField from "../moleculas/FormField";
//types
type Inputs = {
  codigo: string;
  descuento: number;
  numero_usos: number;
};

const FormCuponCode = (): JSX.Element => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  return (
    <Box
      as="form"
      px={{ base: "1.5rem", sm: "1.75rem", lg: "3rem" }}
      // pt={{ base: "1.5rem", sm: "1.875rem", lg: "3.65rem" }}
      // pb={{ base: "2rem", lg: "3rem" }}
      maxWidth={{ lg: "45.625rem", base: "sm" }}
      w="500px"
      // flex={{ lg: "1 1 65%" }}
    >
      <Box as="fieldset" mb="2rem">
        <FormLegend>Create coupons</FormLegend>
        <SimpleGrid
          gridTemplateColumns={{ base: "1fr", sm: "1fr" }}
          gridGap={{ base: "1rem" }}
        >
          <FormField
            {...register("codigo", {
              required: "field can't  be empty",
            })}
            aria-invalid={errors.codigo ? "true" : "false"}
            errors={errors.codigo}
            label={"Enter coupon name"}
            placeholder="#12-2_2"
            type="string"
          />
          <FormField
            {...register("descuento", {
              required: "field can't  be empty",
            })}
            aria-invalid={errors.descuento ? "true" : "false"}
            errors={errors.descuento}
            label={"Enter discount"}
            placeholder="Example: 0.30"
            type="number"
          />
          <FormField
            {...register("numero_usos", {
              required: "field can't  be empty",
            })}
            aria-invalid={errors.numero_usos ? "true" : "false"}
            errors={errors.numero_usos}
            label={"Number of uses"}
            placeholder="2"
            type="number"
          />
          <Box
            as="label"
            fontSize="1rem"
            fontWeight="medium"
            display="inline-block"
          >
            Expiration date
          </Box>
          <DatePickerAtom
            date={date}
            setDate={setDate}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
          />
          <Button type="submit" width="100%" border="1px" colorScheme="blue">
            Submit
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default FormCuponCode;
