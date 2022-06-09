import { useContext } from "react";
import { AddNewContext } from "../context/AddNewPackageContext";
export const useAddNewPackage = () => {
  const { handleMorePackage, packageState, handleMinusMorePackage } =
    useContext(AddNewContext);

  return {
    handleMorePackage,
    handleMinusMorePackage,
    packageState,
  };
};
