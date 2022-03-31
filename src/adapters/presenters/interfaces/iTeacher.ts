import { ITeacherEntity } from "../../../domains/aggregates/interfaces/iTeacher";
import { IAddAsingFlagDTO } from "../../../domains/dto/addFlagToTeacher";

export interface ITeacherPresenter {
  getTeachers(): Promise<Array<ITeacherEntity>>;
  insertTeacher(author: string, content: string): Promise<boolean>;
  removeTeacher(id: string): Promise<Object>;
  updateTeacher(data: ITeacherEntity, id: string): Promise<Object>;
  createTeacher(data: ITeacherEntity, token: string): Promise<Object>;
  assignFlagTeacher(flagId: IAddAsingFlagDTO): Promise<boolean>;
}
