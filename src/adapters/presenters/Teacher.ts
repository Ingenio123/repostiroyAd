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

  async removeTeacher(id: string): Promise<Object> {
    return await this.useCases.removeTeacher(id);
  }

  async updateTeacher(data: ITeacherEntity, id: string): Promise<Object> {
    return await this.useCases.updateTeacher(data, id);
  }

  insertTeacher(author: string, content: string): Promise<boolean> {
    return this.useCases.insertTeacher(author, content);
  }
  async createTeacher(data: ITeacherEntity, token: string): Promise<Object> {
    return this.useCases.createTeacher(data, token);
  }
}

export default TeacherPresenter;
