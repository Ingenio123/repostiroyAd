// import Board from "@domains/aggregates/Board";
import { IAddEntity, ITeacherData } from "../entities/interfaces/iTeacher";
import { ITeacherUseCases } from "../useCases/interfaces/iTeacher";
import { ITeacherRepository } from "../useCases/repository-interfaces/iTeacher";
import { ITeacherEntity } from "../aggregates/interfaces/iTeacher";
import { ITeacherDTO } from "../dto/teacherDTO";

class TeacherUseCase implements ITeacherUseCases {
  constructor(private readonly teacherRepo: ITeacherRepository) {}

  //   async getBoards(): Promise<Array<ITeacherEntity>> {
  //     const boarDTOList = await this.teacherRepo.getBoards();
  //     // const commentDTOList = await this.boardRepo.getComments();

  //     return boarDTOList.map((board) => {
  //       const comments = commentDTOList
  //         .filter((comment) => comment.boardId === board.id)
  //         .map((comment) => new Comment(comment));
  //       const boardEntity = new Board(board).pushComment(comments);
  //       return boardEntity;
  //     });
  //   }
  //   async getTeachers(): Promise<ITeacherEntity[]> {
  //     const teacherDTOList = await this.teacherRepo.getTeachers();
  //     return teacherDTOList.map((teacher) => {});
  //   }

  async getTeachers(): Promise<ITeacherDTO[]> {
    const teacherDTOList = await this.teacherRepo.getTeachers();
    return teacherDTOList;
  }

  insertTeacher(author: string, content: string): Promise<boolean> {
    return this.teacherRepo.insertTeacher(author, content);
  }
}

export default TeacherUseCase;
