import IInfrastructures from "./interfaces/iInfrastructure";
import Http from "../adapters/infrastructures/Http";
import WebStorage from "../adapters/infrastructures/WebStorage";

export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new WebStorage((window as any).sessionStorage),
  };
};
