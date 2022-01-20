// import Board from "@domains/aggregates/Board";

import { ITeacherUseCases } from "../useCases/interfaces/iTeacher";
import { ITeacherRepository } from "../useCases/repository-interfaces/iTeacher";

import { ITeacherDTO } from "../dto/teacherDTO";

class TeacherUseCase implements ITeacherUseCases {
  constructor(private readonly teacherRepo: ITeacherRepository) {}

  async getTeachers(): Promise<ITeacherDTO[]> {
    const teacherDTOList = await this.teacherRepo.getTeachers();
    return teacherDTOList;
  }

  async removeTeacher(id: string): Promise<Object> {
    const deleteTeacher = await this.teacherRepo.deleteTeacher(id);
    return deleteTeacher;
  }

  insertTeacher(author: string, content: string): Promise<boolean> {
    return this.teacherRepo.insertTeacher(author, content);
  }
  updateTeacher(data: ITeacherDTO, id: string): Promise<Object> {
    return this.teacherRepo.updateTeacher(data, id);
  }
}

export default TeacherUseCase;
