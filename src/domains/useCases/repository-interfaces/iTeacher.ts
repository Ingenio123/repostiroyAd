import { ITeacherDTO } from "../../dto/teacherDTO";
// import { ICommentDTO } from "@domains/dto/CommentDTO";

export interface ITeacherRepository {
  getTeachers(): Promise<Array<ITeacherDTO>>;
  insertTeacher(author: string, content: string): Promise<boolean>;
  deleteTeacher(id: string): Promise<object>;
}
