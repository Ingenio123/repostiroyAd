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
    console.log(e.currentTarget);
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

      const resp = await fetch("http://localhost:4000/data/createTeacher", {
        body: formData,
        method: "POST",
      });
      const datos = await resp.json();
      console.log(datos);
      // console.log(resp);
    })(e);
  };

  return (
    <StackAtom border="1px">
      <BoxImageMolecula onChanguePicture={onChangePicture} urlImage={imgData} />

      <FormMoleculaO handleSubmit={mySubmit}>
        <FormField
          {...register("firstName", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          label="Name Teacher"
          aria-invalid={errors.firstName ? "true" : "false"}
          errors={errors.firstName}
          placeholder="Alexei "
        />
        <FormField
          {...register("graduated", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          label="graduated"
          aria-invalid={errors.graduated ? "true" : "false"}
          errors={errors.graduated}
          placeholder="University "
        />
        <TextAreaField
          {...register("eslogan", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          label="eslogan"
          aria-invalid={errors.eslogan ? "true" : "false"}
          errors={errors.eslogan}
          placeholder="Eslogan "
        />
        <TextAreaField
          {...register("description", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          label="description"
          aria-invalid={errors.description ? "true" : "false"}
          errors={errors.description}
          placeholder="description "
        />
        <TextAreaField
          {...register("profesionalBackround", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          label="Profesional Background"
          aria-invalid={errors.profesionalBackround ? "true" : "false"}
          errors={errors.profesionalBackround}
          placeholder="profBackground "
        />
        <TextAreaField
          {...register("Interests", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          label="Interests"
          aria-invalid={errors.Interests ? "true" : "false"}
          errors={errors.Interests}
          placeholder="Interests "
        />
        <ButtonAtom
          width="50%"
          type="submit"
          text="Submit"
          colorScheme="blue"
        />
      </FormMoleculaO>
    </StackAtom>
  );
};
