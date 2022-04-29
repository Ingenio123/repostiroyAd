import { Box, useToast } from "@chakra-ui/react";
import FormField from "../moleculas/FormField";
import TextAreaField from "../moleculas/TextAreaField";
import FormLegend from "../atomo/FormLegend";
import { Button } from "@chakra-ui/react";
import SelectCountryAndFlags from "../moleculas/SelectFlags";
import { Contries as CONTRIES } from "../../../utils/listContries";
import { BoxImageMolecula } from "../moleculas/BoxImage";
import { useState, FormEvent, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import Url from "../../../envConfig";
import { FormMoleculaO } from "../moleculas/FormMolecula";

type InputCreateReviews = {
  name_user: string;
  description: string;
  languages_is_learning: string;
};

export const FormReviews = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputCreateReviews>({ mode: "onBlur" });
  const toast = useToast();

  const [Picture, setPicture] = useState<string>("");
  const [ImgData, setImgData] = useState<any>("");
  const [SelectCountry, setSelectCountry] = useState<string>("");
  const countryOptions = CONTRIES.map((i: any) => {
    return {
      label: i.name,
      iso: i.code,
    };
  });
  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChangue = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // console.log(value);

    setSelectCountry(value.toLowerCase());
  };

  const mySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log("submited");

    // if (isDisabled) return;
    handleSubmit(async (data) => {
      // onCheckoutModalOpen();
      // console.log(data);
      formData.append("imageUser", Picture);
      formData.append("countryIso", SelectCountry);
      console.log(data);

      console.log("DATA");
      const resp = await fetch(`${Url.apiUrl}/v1/data/add/reviews`, {
        body: formData,
        method: "POST",
      });
      const datos = await resp.json();
      console.log(datos);
      reset({ description: "", languages_is_learning: "", name_user: "" });
      setSelectCountry("");
      setImgData("");
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        variant: "subtle",
        duration: 9000,
        isClosable: true,
      });
    })(e);
  };

  return (
    <>
      <Box
        px={{ base: "1rem", sm: ".5rem" }}
        maxWidth={{ lg: "30rem", base: "sm" }}
        w="100%"
        // border="1px solid red"
      >
        <FormLegend>Create Reviews</FormLegend>
        <BoxImageMolecula
          onChanguePicture={onChangePicture}
          urlImage={ImgData}
        />
        <SelectCountryAndFlags
          SelectCountry={SelectCountry}
          onChange={handleChangue}
          label="Select Country"
          options={countryOptions}
        />
        <FormMoleculaO handleSubmit={mySubmit}>
          <FormField
            {...register("name_user", {
              required: "field can't be empty",
            })}
            aria-invalid={errors.name_user ? "true" : "false"}
            errors={errors.name_user}
            label={"Enter name user"}
            placeholder="Jhon Doe"
            type="string"
          />
          <FormField
            {...register("languages_is_learning", {
              required: "field can't  be empty",
            })}
            aria-invalid={errors.languages_is_learning ? "true" : "false"}
            errors={errors.languages_is_learning}
            label={"Language is Learning"}
            placeholder="English"
            type="string"
          />
          <TextAreaField
            {...register("description", {
              required: "field can't be empty",
            })}
            errors={errors.description}
            label="Description"
            placeholder="lorem  ipsum!"
            type="string"
          />
          <Button
            display="block"
            type="submit"
            width="50%"
            colorScheme="blue"
            m="0 auto"
          >
            Submit
          </Button>
        </FormMoleculaO>
      </Box>
    </>
  );
};
