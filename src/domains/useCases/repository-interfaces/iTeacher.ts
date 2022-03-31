import { IAddAsingFlagDTO } from "../../dto/addFlagToTeacher";
import { ITeacherDTO } from "../../dto/teacherDTO";

export interface ITeacherRepository {
  getTeachers(): Promise<Array<ITeacherDTO>>;
  insertTeacher(author: string, content: string): Promise<boolean>;
  deleteTeacher(id: string): Promise<object>;
  updateTeacher(data: ITeacherDTO, id: string): Promise<Object>;
  createTeacher(data: ITeacherDTO, token: string): Promise<Object>;
  assignFlagTeacher(flagId: IAddAsingFlagDTO): Promise<boolean>;
}
