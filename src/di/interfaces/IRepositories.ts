import { IFlagRepository } from "./../../domains/useCases/repository-interfaces/iFlag";
import { ISessionRepository } from "../../domains/useCases/repository-interfaces/iSession";
import { ITeacherRepository } from "../../domains/useCases/repository-interfaces/iTeacher";
import { ICuponCodeRepository } from "../../domains/useCases/repository-interfaces/iCuponCode";

export default interface IRepositories {
  session: ISessionRepository;
  teacher: ITeacherRepository;
  cupon: ICuponCodeRepository;
  flag: IFlagRepository;
}
