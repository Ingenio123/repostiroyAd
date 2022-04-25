import { Box } from "@chakra-ui/react";
import FormField from "../moleculas/FormField";
import TextAreaField from "../moleculas/TextAreaField";
import FormLegend from "../atomo/FormLegend";
import { Button } from "@chakra-ui/react";
import SelectCountryAndFlags from "../moleculas/SelectFlags";
import { CONTRIES } from "../../../utils/contry";
import { BoxImageMolecula } from "../moleculas/BoxImage";
import { useState } from "react";
export const FormReviews = () => {
  const [Picture, setPicture] = useState<string>("");
  const [ImgData, setImgData] = useState<any>("");
  const countryOptions = CONTRIES.map((i: any) => {
    return {
      label: i.name,
      iso: i.iso3,
    };
  });
  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <Box
        as="form"
        px={{ base: "1rem", sm: ".5rem" }}
        maxWidth={{ lg: "45.625rem", base: "sm" }}
        w="100%"
        // border="1px solid red"
      >
        <FormLegend>Create Reviews</FormLegend>
        <BoxImageMolecula
          onChanguePicture={onChangePicture}
          urlImage={ImgData}
        />

        <SelectCountryAndFlags options={countryOptions} />

        <FormField
          //   {...register("codigo", {
          //     required: "field can't  be empty",
          //   })}
          //   aria-invalid={errors.codigo ? "true" : "false"}
          //   errors={errors.codigo}
          label={"Enter name user"}
          placeholder="Jhon Doe"
          type="string"
        />
        <FormField
          //   {...register("codigo", {
          //     required: "field can't  be empty",
          //   })}
          //   aria-invalid={errors.codigo ? "true" : "false"}
          //   errors={errors.codigo}
          label={"Language is Learning"}
          placeholder="English"
          type="string"
        />
        <TextAreaField label="Description" placeholder="" />
        <Button
          display="block"
          type="submit"
          width="50%"
          colorScheme="blue"
          m="0 auto"
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
