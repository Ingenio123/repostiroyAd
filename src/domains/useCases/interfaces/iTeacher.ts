import { ITeacherDTO } from "../../dto/teacherDTO";

export interface ITeacherUseCases {
  getTeachers(): Promise<Array<ITeacherDTO>>;
  insertTeacher(author: string, content: string): Promise<boolean>;
  removeTeacher(id: string): Promise<Object>;
  updateTeacher(data: ITeacherDTO, id: string): Promise<Object>;
  createTeacher(data: ITeacherDTO, token: string): Promise<Object>;
  //   getComments(): Promise<Array<ICommentDTO>>;
}
