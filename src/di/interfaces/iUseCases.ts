import { ICuponCode } from "./../../domains/useCases/interfaces/iCuponCode";
import { ISessionUseCase } from "../../domains/useCases/interfaces/iSession";
import { ITeacherUseCases } from "../../domains/useCases/interfaces/iTeacher";

export default interface IUseCases {
  session: ISessionUseCase;
  teacher: ITeacherUseCases;
  cupon: ICuponCode;
}
