import { ChangeEvent, useState, useRef } from "react";
import { StackAtom } from "../../components/atomics/atomo/Stack";
import { BoxImageMolecula } from "../../components/atomics/moleculas/BoxImage";
import { FormOrganismo } from "../../components/atomics/organismos/FormOrganismo";
import { ImageOrganismo } from "../../components/atomics/organismos/ImageOrganismo";
import { useForm } from "react-hook-form";

export const CreateTeacher = () => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  const renderData = (formData: any) => {
    const username = formData.get("file");
    console.log("data:" + username);
  };

  const handleSubmitForm = (data: any) => {
    console.log("submit");
    console.log(data);
    const formData = new FormData();
    formData.append("file", imgData);
    // formData.append("name",)
    renderData(formData);
  };
  return (
    <StackAtom border="1px">
      <ImageOrganismo>
        <BoxImageMolecula
          onChanguePicture={onChangePicture}
          urlImage={imgData}
        />
      </ImageOrganismo>
      <FormOrganismo
        handleSubmit={handleSubmitForm}
        handleSubmitHooksForm={handleSubmit}
        register={register}
      />
    </StackAtom>
  );
};
