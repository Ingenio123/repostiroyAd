// import { IBoardRepository } from "@domains/useCases/repository-interfaces/iBoard";
import { ITeacherRepository } from "../../domains/useCases/repository-interfaces/iTeacher";
// import BoardDTO, { IBoardDTO, IBoardParams } from "@domains/dto/BoardDTO";
import TeacherDTO, {
  ITeacherDTO,
  ITeacherParams,
} from "../../domains/dto/teacherDTO";
import Url from "../../envConfig";

import { IHttp } from "../infrastructures/interfaces/iHttp";

class TeacherRepository implements ITeacherRepository {
  constructor(readonly http: IHttp) {}

  async getTeachers(): Promise<Array<ITeacherDTO>> {
    const response = await this.http.request({
      method: "GET",
      url: `${Url.apiUrl}/data/getAllTeachers`,
    });
    // console.log(response);
    return response.teachers.map(
      (teacher: ITeacherParams) => new TeacherDTO(teacher)
    );
  }

  async deleteTeacher(id: string): Promise<object> {
    const response = await this.http.request({
      method: "DELETE",
      url: `${Url.apiUrl}/data/delete/teacher/${id}`,
    });
    console.log(response);
    return response;
  }

  insertTeacher(author: string, content: string): Promise<boolean> {
    return this.http.request({
      method: "POST",
      url: "http://localhost:7777/boards",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        author,
        content,
      },
    });
  }
  async updateTeacher(data: ITeacherDTO, id: string): Promise<Object> {
    console.log("datoss", data);
    return await this.http.request({
      method: "PUT",
      url: `${Url.apiUrl}/data/updateTeacher/${id}`,
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async createTeacher(data: ITeacherDTO, token: string): Promise<Object> {
    console.log(data);
    return await this.http.request({
      method: "POST",
      url: `${Url.apiUrl}/data/createTeacher`,
      body: data,
    });
  }
}

export default TeacherRepository;
