// import { IBoardPresenter } from "./interfaces/iBoard";
import { ITeacherPresenter } from "./interfaces/iTeacher";
// import { IBoardUseCase } from "@domains/useCases/interfaces/iBoard";
import { ITeacherUseCases } from "../../domains/useCases/interfaces/iTeacher";
// import { IBoardEntity } from "@domains/aggregates/interfaces/iBoard";
import { ITeacherEntity } from "../../domains/aggregates/interfaces/iTeacher";
class TeacherPresenter implements ITeacherPresenter {
  constructor(private readonly useCases: ITeacherUseCases) {}

  async getTeachers(): Promise<Array<ITeacherEntity>> {
    return await this.useCases.getTeachers();
  }

  insertTeacher(author: string, content: string): Promise<boolean> {
    return this.useCases.insertTeacher(author, content);
  }
}

export default TeacherPresenter;
