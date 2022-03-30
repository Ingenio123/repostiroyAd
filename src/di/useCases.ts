import Session from "../domains/useCases/Session";
import IRepositories from "./interfaces/IRepositories";
import IUseCases from "./interfaces/iUseCases";
import Teacher from "../domains/useCases/Teacher";
import CuponCode from "../domains/useCases/CuponCode";
import Flag from "../domains/useCases/Flag";

const UseCases = (repositories: IRepositories): IUseCases => {
  return {
    session: new Session(repositories.session),
    teacher: new Teacher(repositories.teacher),
    cupon: new CuponCode(repositories.cupon),
    flag: new Flag(repositories.flag),
  };
};

export default UseCases;
