import { FormMoleculaO } from "../../moleculas/FormMolecula";
import { useRadioGroup, Box, Button, IconButton } from "@chakra-ui/react";
import RadioComponent from "../../atomo/Radio";
import SelectField from "../../moleculas/SelectField";
import { useForm } from "react-hook-form";
import InputField from "../../moleculas/FormField";
import { useState } from "react";
import { Toggle } from "../../moleculas/ToggleMolecula";
import { useAddNewPackge } from "../../../../hooks/useMutation";
import { useAddNewPackage } from "../../../../hooks/useAddNewPackage";
import { BiX } from "react-icons/bi";
//
type UseForm = {
  kids: string | boolean;
  language: string;
  months: number;
  lesson: number;
  time: number;
  numberStudents: number;
  group: boolean;
};

const AddPackage = ({ email }: { email: string }) => {
  const { packageState, handleMinusMorePackage } = useAddNewPackage();
  const options = ["One to one", "Group lessons"];
  const [checkedOption, setCheckedOption] = useState(options[0]);
  const [AddNewPackageGrphql, { data, loading, error }] = useAddNewPackge();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UseForm>({ mode: "onBlur" });
  //
  const handlChange = (value: string) => {
    console.log(value);
    setCheckedOption(value);
  };
  const { getRadioProps, getRootProps } = useRadioGroup({
    name: "TypePackage",
    defaultValue: "OneToOne",
    onChange: handlChange,
  });
  const onSubmit = async (data: UseForm) => {
    console.log(data);
    let { group, kids, language, lesson, months, numberStudents, time } = data;
    if (kids == "true") {
      kids = true;
    } else {
      kids = false;
    }
    await AddNewPackageGrphql({
      variables: {
        email: email,
        kids,
        idiom: language,
        lesson,
        months,
        numberStudents,
        time,
      },
    });
    reset();
  };
  return (
    <>
      {packageState && (
        <Box w="50%">
          <Box display={"flex"} justifyContent="end" mt="8">
            <IconButton
              onClick={handleMinusMorePackage}
              variant={"ghost"}
              aria-label="icon"
              icon={<BiX size={"1.5em"} />}
            />
          </Box>
          <FormMoleculaO handleSubmit={handleSubmit(onSubmit)} width="100%">
            <Box
              {...getRootProps}
              display="flex"
              justifyContent={"center"}
              gap="4"
            >
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioComponent key={value} {...radio}>
                    {value}
                  </RadioComponent>
                );
              })}
            </Box>
            <Toggle name="kids" control={control} />
            <SelectField
              {...register("language", {
                required: "Fiel is required",
              })}
              label="Language"
              options={[
                { value: "", label: "Select language" },
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
              options={[
                { value: "", label: "Select lessons" },
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
              options={[
                { value: "", label: "Select length" },
                { value: "30", label: "30 minutes" },
                { value: "45", label: "45 minutes" },
                { value: "60", label: "60 minutes" },
              ]}
            />
            {checkedOption === options[1] && (
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
            <Button type="submit" colorScheme={"brand"} mt="2">
              Submit
            </Button>
          </FormMoleculaO>
        </Box>
      )}
    </>
  );
};
export default AddPackage;
