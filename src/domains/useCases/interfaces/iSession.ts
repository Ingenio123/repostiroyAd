import { IUserDTO } from "../../dto/UserDTO";

export interface ISessionUseCase {
  login(userDTO: IUserDTO): Promise<string>;
  getToken(): Promise<string>;
  setToken(token: string): void;
  removeToken(): void;
}
