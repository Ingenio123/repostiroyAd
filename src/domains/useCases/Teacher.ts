// import Board from "@domains/aggregates/Board";

import { ITeacherUseCases } from "../useCases/interfaces/iTeacher";
import { ITeacherRepository } from "../useCases/repository-interfaces/iTeacher";

import { ITeacherDTO } from "../dto/teacherDTO";
import { IAddAsingFlagDTO } from "../dto/addFlagToTeacher";

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
  async updateTeacher(data: ITeacherDTO, id: string): Promise<Object> {
    return await this.teacherRepo.updateTeacher(data, id);
  }
  async createTeacher(data: ITeacherDTO, token: string): Promise<Object> {
    return await this.teacherRepo.createTeacher(data, token);
  }
  async assignFlagTeacher(flagData: IAddAsingFlagDTO): Promise<boolean> {
    return await this.teacherRepo.assignFlagTeacher(flagData);
  }
}

export default TeacherUseCase;
