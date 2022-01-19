// import { IBoardEntity } from "@domains/aggregates/interfaces/iBoard";
import { ITeacherEntity } from "../../../domains/aggregates/interfaces/iTeacher";

export interface ITeacherPresenter {
  getTeachers(): Promise<Array<ITeacherEntity>>;
  insertTeacher(author: string, content: string): Promise<boolean>;
}
