import { useForm } from "react-hook-form";
import ButtonAtom from "../atomo/Button";
import FormField from "../moleculas/FormField";
import TextAreaField from "../moleculas/TextAreaField";
import { FormMoleculaO } from "../moleculas/FormMolecula";
import { useState } from "react";
import { StackAtom } from "../atomo/Stack";
import { BoxImageMolecula } from "../moleculas/BoxImage";
import di from "../../../di";
import { ITeacherEntity } from "../../../domains/aggregates/interfaces/iTeacher";
import Url from "../../../envConfig";
import { useHistory } from "react-router-dom";
import { Text } from "@chakra-ui/react";

type Inputs = {
  firstName: string;
  graduated: string;
  eslogan: string;
  description: string;
  profesionalBackround: string;
  Interests: string;
};

export const FormOrganismo = ({ ...props }: any) => {
  const [isDisabled, setIsDisabled] = useState<Boolean>(false);
  const [picture, setPicture] = useState<any>(null);
  const [imgData, setImgData] = useState<any>(null);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  /**
   *
   * @param e
   * @returns null
   */
  const rederData = (formdata: FormData, name: string) => {
    const datos = formdata.get(name);
    console.log("datos: " + datos);
  };
  //

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
  //
  const mySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log("submited");

    if (isDisabled) return;
    handleSubmit(async (data) => {
      // onCheckoutModalOpen();
      // console.log(data);
      formData.append("imageTeacher", picture);

      // const object: ITeacherEntity = {
      //   name: data.name,
      //   eslogan: data.eslogan,
      //   description: data.description,
      //   interests: data.Interests,
      //   profesionalBackround: data.profesionalBackround,
      //   imgUrl: formData.get("picture") || "asas",
      // };

      const resp = await fetch(`${Url.apiUrl}/data/createTeacher`, {
        body: formData,
        method: "POST",
      });
      const datos = await resp.json();
      if (datos) return history.push("/admin/teacher");
      // console.log(resp);
    })(e);
  };

  return (
    <>
      <Text textAlign={"center"} as="h1" fontWeight="bold" fontSize="2rem">
        Create teacher's profile
      </Text>
      <StackAtom m="0 auto">
        <BoxImageMolecula
          onChanguePicture={onChangePicture}
          urlImage={imgData}
        />
        <FormMoleculaO handleSubmit={mySubmit}>
          <FormField
            {...register("firstName", {
              required: "Field cannot be empty",
              pattern: {
                value: /^[^<>%$#^*]*$/,
                message: "Wrong format",
              },
            })}
            label="Teacher's name"
            aria-invalid={errors.firstName ? "true" : "false"}
            errors={errors.firstName}
            placeholder="Jane Doe"
          />
          <TextAreaField
            {...register("eslogan", {
              required: "Field cannot be empty",
              pattern: {
                value: /^[^<>%$#^*]*$/,
                message: "Wrong format",
              },
            })}
            label="Slogan"
            aria-invalid={errors.eslogan ? "true" : "false"}
            errors={errors.eslogan}
            placeholder="Slogan"
          />
          <TextAreaField
            {...register("description", {
              required: "Field cannot be empty",
              pattern: {
                value: /^[^<>%$#^*]*$/,
                message: "Wrong format",
              },
            })}
            label="Introduction"
            aria-invalid={errors.description ? "true" : "false"}
            errors={errors.description}
            placeholder="Introduction"
          />
          <TextAreaField
            {...register("profesionalBackround", {
              required: "Field cannot be empty",
              pattern: {
                value: /^[^<>%$#^*]*$/,
                message: "Wrong format",
              },
            })}
            label="Professional Background"
            aria-invalid={errors.profesionalBackround ? "true" : "false"}
            errors={errors.profesionalBackround}
            placeholder="Professional Background"
          />
          <TextAreaField
            {...register("Interests", {
              required: "Field cannot be empty",
              pattern: {
                value: /^[^<>%$#^*]*$/,
                message: "Wrong format",
              },
            })}
            label="Hobbies and interests"
            aria-invalid={errors.Interests ? "true" : "false"}
            errors={errors.Interests}
            placeholder="Hobbies and interests"
          />
          <ButtonAtom
            width="50%"
            type="submit"
            text="Submit"
            colorScheme="blue"
          />
        </FormMoleculaO>
      </StackAtom>
    </>
  );
};
