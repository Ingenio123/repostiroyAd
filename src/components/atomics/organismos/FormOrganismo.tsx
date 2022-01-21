import { useForm } from "react-hook-form";
import ButtonAtom from "../atomo/Button";
import { InputTextAreaAtom } from "../atomo/InputAreaAtom";
import { InputAtom } from "../atomo/InputAtom";
import FormField from "../moleculas/FormField";
import TextAreaField from "../moleculas/TextAreaField";
import { FormMoleculaO } from "../moleculas/FormMolecula";

type Inputs = {
  name: string;
  Graduated: string;
  Eslogan: string;
  Description: string;
  profBackground: string;
  Interests: string;
};

export const FormOrganismo = ({ handleSubmitHooksForm, ...props }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  return (
    <FormMoleculaO
      handleSubmit={handleSubmit}
      handleSubmitHooksForm={handleSubmitHooksForm}
    >
      <FormField
        {...register("name", {
          required: "Field cannot be empty",
          pattern: {
            value: /^[^<>%$#^*]*$/,
            message: "Wrong format",
          },
        })}
        label="Name Teacher"
        aria-invalid={errors.name ? "true" : "false"}
        errors={errors.name}
        placeholder="Alexei "
      />
      <FormField
        {...register("Graduated", {
          required: "Field cannot be empty",
          pattern: {
            value: /^[^<>%$#^*]*$/,
            message: "Wrong format",
          },
        })}
        label="Graduated"
        aria-invalid={errors.Graduated ? "true" : "false"}
        errors={errors.Graduated}
        placeholder="University "
      />
      <TextAreaField
        {...register("Eslogan", {
          required: "Field cannot be empty",
          pattern: {
            value: /^[^<>%$#^*]*$/,
            message: "Wrong format",
          },
        })}
        label="Eslogan"
        aria-invalid={errors.Eslogan ? "true" : "false"}
        errors={errors.Eslogan}
        placeholder="Eslogan "
      />
      <TextAreaField
        {...register("Description", {
          required: "Field cannot be empty",
          pattern: {
            value: /^[^<>%$#^*]*$/,
            message: "Wrong format",
          },
        })}
        label="Description"
        aria-invalid={errors.Description ? "true" : "false"}
        errors={errors.Description}
        placeholder="Description "
      />
      <TextAreaField
        {...register("profBackground", {
          required: "Field cannot be empty",
          pattern: {
            value: /^[^<>%$#^*]*$/,
            message: "Wrong format",
          },
        })}
        label="Profesional Background"
        aria-invalid={errors.profBackground ? "true" : "false"}
        errors={errors.profBackground}
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
      <ButtonAtom width="50%" type="submit" text="Submit" colorScheme="blue" />
    </FormMoleculaO>
  );
};
