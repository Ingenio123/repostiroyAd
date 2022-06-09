import { createContext, useState } from "react";

export type AddNewPackageContextProps = {
  packageState: boolean;
  handleMorePackage: () => void;
  handleMinusMorePackage: () => void;
};
export const AddNewContext = createContext<AddNewPackageContextProps>(
  {} as AddNewPackageContextProps
);

// ############# PROVIDER ##############
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AddNewPackageProvider = ({ children }: Props) => {
  const [packageState, setAddNewPackage] = useState<boolean>(false);
  const handleMorePackage = () => {
    setAddNewPackage(true);
  };
  const handleMinusMorePackage = () => {
    setAddNewPackage(false);
  };
  return (
    <AddNewContext.Provider
      value={{ handleMorePackage, packageState, handleMinusMorePackage }}
    >
      {children}
    </AddNewContext.Provider>
  );
};
