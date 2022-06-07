import { Stack, Button, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// custom hooks
import { useAddNewTemary } from "../../../hooks/useMutation";
//atom
import TextLegend from "../atomo/FormLegend";
//molecula
import { FormMoleculaO } from "../moleculas/FormMolecula";
// import FormField from "../moleculas/FormField";
import TextAreaField from "../moleculas/TextAreaField";
import SelectField from "../moleculas/SelectField";

type InputCreateTemary = {
  name_level: string;
  content: string;
};

export const FormCreateTemary = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputCreateTemary>({ mode: "onBlur" });
  const [AddNewTemary, { data: DataNewTemary, error, loading }] =
    useAddNewTemary();
  const onSubmit = (data: InputCreateTemary) => {
    const { content, name_level } = data;
    AddNewTemary({
      variables: {
        nameLevel: name_level,
        content_param: content,
      },
    });
    reset();
  };

  return (
    <Box width={"50%"}>
      <TextLegend>Create learning plan</TextLegend>

      <FormMoleculaO
        width="100%"
        handleSubmit={handleSubmit((data) => onSubmit(data))}
      >
        {/* <FormField
          {...register("name_level", {
            required: "Require name level",
          })}
          aria-invalid={errors.name_level ? true : false}
          errors={errors.name_level}
          label={"Name Level"}
          placeholder="A1"
          type="text"
        /> */}
        <SelectField
          {...register("name_level", {
            required: "Name level required",
          })}
          label="Name level"
          options={[
            { value: "", label: "Select level" },
            { value: "A1", label: "A1" },
            { value: "A2", label: "A2" },
            { value: "B1", label: "B1" },
            { value: "B2", label: "B2" },
            { value: "C1", label: "C1" },
            { value: "C2", label: "C2" },
          ]}
        />
        <TextAreaField
          {...register("content", {
            required: "Content required",
          })}
          errors={errors.content}
          label="Content"
          type="text"
        />
        <Button
          display="block"
          type="submit"
          colorScheme="blue"
          margin="1rem auto"
          isLoading={loading}
        >
          Submit
        </Button>
      </FormMoleculaO>
    </Box>
  );
};
