import { ISessionRepository } from "../../domains/useCases/repository-interfaces/iSession";
import { ITeacherRepository } from "../../domains/useCases/repository-interfaces/iTeacher";

export default interface IRepositories {
  session: ISessionRepository;
  teacher: ITeacherRepository;
}
