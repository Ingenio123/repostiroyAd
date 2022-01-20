import { StackAtom } from "../../components/atomics/atomo/Stack";
import { BoxImageMolecula } from "../../components/atomics/moleculas/BoxImage";
import { FormOrganismo } from "../../components/atomics/organismos/FormOrganismo";
import { ImageOrganismo } from "../../components/atomics/organismos/ImageOrganismo";

export const CreateTeacher = () => {
  return (
    <StackAtom border="1px">
      <ImageOrganismo>
        <BoxImageMolecula />
      </ImageOrganismo>
      <FormOrganismo />
    </StackAtom>
  );
};
