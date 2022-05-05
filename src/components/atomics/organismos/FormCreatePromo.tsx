import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import FormLegend from "../atomo/FormLegend";
import { FormMoleculaO } from "../moleculas/FormMolecula";
import FormField from "../moleculas/FormField";
import { useForm } from "react-hook-form";
import { BoxImagePlaceholder } from "../moleculas/ImagePlaceholder";
import Url from "../../../envConfig";

type InputPromo = {
  promo_title: string;
  promo_description: string;
  promo_code: string;
  promo_conditons: string;
};

const FormCreatePromo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputPromo>({ mode: "onBlur" });
  const [Picture, setPicture] = useState<string | any>("");
  const [ImageData, setImageData] = useState<any>(
    "https://via.placeholder.com/300"
  );
  const toast = useToast();
  //
  const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files![0]) {
      //operador de assercion (assertion) .files![0]
      setPicture(e.target.files![0]);
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(e.target.files![0]);
    }
  };
  //
  const mySubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    handleSubmit(async (data) => {
      formData.append("image", Picture);
      //   console.log(data);
      let resp = await fetch(`${Url.apiUrl}/v1/data/create/promo`, {
        body: formData,
        method: "POST",
      });
      let datos = await resp.json();
      console.log(datos);
      reset({
        promo_description: "",
        promo_code: "",
        promo_title: "",
        promo_conditons: "",
      });
      setImageData("");
      toast({
        title: "Successful.",
        description: "The promo has been submitted.",
        status: "success",
        variant: "subtle",
        duration: 9000,
        isClosable: true,
      });
    })(e);
  };

  return (
    <Box width={"40%"}>
      <FormLegend>Create a promo</FormLegend>
      <BoxImagePlaceholder
        onChanguePicture={onChangePicture}
        urlImage={ImageData}
      />
      <FormMoleculaO width="100%" handleSubmit={mySubmit}>
        <FormField
          {...register("promo_title", {
            required: "field can't be empty",
          })}
          aria-invalid={errors.promo_title ? "true" : "false"}
          errors={errors.promo_title}
          label="Promo title"
          placeholder="title"
          type="string"
        />
        <FormField
          {...register("promo_description", {
            required: "field can't be empty",
          })}
          aria-invalid={errors.promo_description ? "true" : "false"}
          errors={errors.promo_description}
          label="Promo description"
          placeholder="description"
          type="string"
        />
        <FormField
          {...register("promo_code", {
            required: "field can't be empty",
          })}
          aria-invalid={errors.promo_code ? "true" : "false"}
          errors={errors.promo_code}
          label="Promo code"
          placeholder="code"
          type="string"
        />
        <FormField
          {...register("promo_conditons", {
            required: "field can't be empty",
          })}
          aria-invalid={errors.promo_conditons ? "true" : "false"}
          errors={errors.promo_conditons}
          label="Promo conditions"
          placeholder="conditions"
          type="string"
        />
        <Button
          colorScheme={"blue"}
          type="submit"
          display={"block"}
          width="50%"
          margin="1rem auto"
        >
          Submit
        </Button>
      </FormMoleculaO>
    </Box>
  );
};

export { FormCreatePromo };
