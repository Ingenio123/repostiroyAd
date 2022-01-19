import { IUserDTO } from "../../domains/dto/UserDTO";
import { ISessionRepository } from "../../domains/useCases/repository-interfaces/iSession";
import { IHttp } from "../infrastructures/interfaces/iHttp";
import { IStorage } from "../infrastructures/interfaces/iStorage";
import env from "../../envConfig";

class SessionRepository implements ISessionRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}
  async login(userDTO: IUserDTO): Promise<string> {
    const response = await this.http.request({
      method: "POST",
      url: `${env.apiUrl}/data/userSignIn`,
      body: {
        email: userDTO.email,
        password: userDTO.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.user.token;
  }
  //
  getToken(): Promise<string> {
    return this.storage.get("token");
  }
  removeToken(): void {
    this.storage.remove("token");
  }
  setToken(token: string): void {
    this.storage.set("token", token);
  }
}
export default SessionRepository;
