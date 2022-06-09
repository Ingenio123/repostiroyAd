import { Button, useRadioGroup, Box } from "@chakra-ui/react";
import Radio from "../atomo/Radio";
import InputField from "../moleculas/FormField";
import SelectField from "../moleculas/SelectField";
import { useForm } from "react-hook-form";
import { FormMoleculaO } from "../moleculas/FormMolecula";
import { useAddNewStudent } from "../../../hooks/useMutation";
import { Toggle } from "../moleculas/ToggleMolecula";
import { useState } from "react";
type InputsForm = {
  kids: string | boolean;
  language: string;
  months: number;
  lesson: number;
  time: number;
  numberStudents: number;
  group: boolean;
};

export const FormNewStudentOrganismo = ({ email }: { email: string }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<InputsForm>({ mode: "onBlur" });
  //
  const [handleNewStudent, { data, loading, error }] = useAddNewStudent();
  //
  const options = ["Ono to one", "Group lessons"];
  const [checkedOption, setCheckedOption] = useState(options[0]);
  //
  const handleChange = (value: string) => {
    setCheckedOption(value);
    console.log(value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Type Package",
    defaultValue: "Regular",
    onChange: handleChange,
  });
  //
  const onSubmit = (data: InputsForm) => {
    let { kids, language, lesson, months, time, group, numberStudents } = data;
    if (kids == "true") {
      kids = true;
    } else {
      kids = false;
    }
    console.log(data);
    reset();
    handleNewStudent({
      variables: {
        email,
        kids,
        idiom: language,
        lesson,
        months,
        time,
        group,
        numberStudents,
      },
    });
  };
  const group = getRootProps();

  return (
    <>
      <FormMoleculaO
        handleSubmit={handleSubmit((data) => onSubmit(data))}
        width="100%"
      >
        <Box
          {...group}
          display="flex"
          mb="1rem"
          justifyContent={"center"}
          gap="1rem"
        >
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <Radio key={value} {...radio}>
                {value}
              </Radio>
            );
          })}
        </Box>
        <Toggle control={control} defaultValue="false" name="kids" />
        <SelectField
          {...register("language", {
            required: "Fiel is required",
          })}
          placeholder="Select language"
          label="Language"
          options={[
            { value: "English", label: "English" },
            { value: "French", label: "French" },
            { value: "Spanish", label: "Spanish" },
            { value: "German", label: "German" },
            { value: "Korean", label: "Korean" },
            { value: "Russian", label: "Russian" },
          ]}
        />
        <SelectField
          {...register("lesson", {
            required: "Fiel is required",
          })}
          label="Lessons per month"
          placeholder="Select lessons"
          options={[
            { value: 1, label: "1 lesson" },
            { value: 4, label: "4 lessons" },
            { value: 8, label: "8 lessons" },
            { value: 12, label: "12 lessons" },
            { value: 16, label: "16 lessons" },
            { value: 20, label: "20 lessons" },
          ]}
        />
        <SelectField
          {...register("time", {
            required: "Fiel is required",
          })}
          label="Lessons length"
          placeholder="Select length"
          options={[
            { value: "30", label: "30 minutes" },
            { value: "45", label: "45 minutes" },
            { value: "60", label: "60 minutes" },
          ]}
        />
        {checkedOption !== options[0] && (
          <InputField
            {...register("numberStudents", {
              required: "Field is required",
              max: {
                value: 10,
                message: "Max number of students is 10",
              },
              maxLength: {
                value: 2,
                message: "Max length of number is 2",
              },
              min: {
                value: 2,
                message: "Min number of students is 2",
              },
            })}
            errors={errors.numberStudents}
            label="Number of students"
            type="number"
          />
        )}
        <InputField
          {...register("months", {
            required: "Field is required",
            max: {
              value: 12,
              message: "Max months is 12",
            },
            min: {
              value: 1,
              message: "Min months is 1",
            },
          })}
          errors={errors.months}
          label="Number of months"
          type="number"
        />
        <Button
          type="submit"
          display={"block"}
          colorScheme={"blue"}
          m="1rem auto"
          w="30%"
        >
          Submit
        </Button>
      </FormMoleculaO>
    </>
  );
};
