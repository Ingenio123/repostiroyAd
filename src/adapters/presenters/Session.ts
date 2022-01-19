import UserDTO from "../../domains/dto/UserDTO";
import { ISessionUseCase } from "../../domains/useCases/interfaces/iSession";
import { ISessionPresenter } from "./interfaces/iSession";

class SessionPresenter implements ISessionPresenter {
  constructor(private readonly useCases: ISessionUseCase) {}

  async login(email: string, password: string): Promise<string> {
    return await this.useCases.login(new UserDTO({ email, password }));
  }

  getToken(): Promise<string> {
    return this.useCases.getToken();
  }

  setToken(token: string): void {
    this.useCases.setToken(token);
  }

  removeToken(): void {
    this.useCases.removeToken();
  }
}

export default SessionPresenter;
