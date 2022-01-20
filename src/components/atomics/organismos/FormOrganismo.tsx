import ButtonAtom from "../atomo/Button";
import { InputTextAreaAtom } from "../atomo/InputAreaAtom";
import { InputAtom } from "../atomo/InputAtom";
import { FormMoleculaO } from "../moleculas/FormMolecula";

export const FormOrganismo = ({ ...props }) => {
  return (
    <FormMoleculaO>
      <InputAtom htmlFor="name" type="text" label="Name teacher" />
      <InputAtom htmlFor="graduated" type="text" label="Graduated " />
      <InputTextAreaAtom
        htmlFor="eslogan"
        label="Eslogan"
        placeholder="eslogan"
      />
      <InputTextAreaAtom
        htmlFor="description"
        label="Description"
        placeholder="description hero"
      />
      <InputTextAreaAtom
        htmlFor="profBackground"
        label="Profesional Background"
        placeholder="Profesional Background hero"
      />
      <InputTextAreaAtom
        htmlFor="intersts"
        label="Interests "
        placeholder="Intersts hero"
      />
      <ButtonAtom text="Submit" colorScheme="blue" />
    </FormMoleculaO>
  );
};
