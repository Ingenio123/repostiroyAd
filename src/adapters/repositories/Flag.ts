import { IFlagParams } from "./../../domains/dto/FlagDTO";
import { IFlagDTO } from "../../domains/dto/FlagDTO";
import { IHttp } from "../infrastructures/interfaces/iHttp";
import { IFlagRepository } from "./../../domains/useCases/repository-interfaces/iFlag";
import URI from "../../envConfig";
import FlagDTO from "../../domains/dto/FlagDTO";
class FlagRepository implements IFlagRepository {
  constructor(readonly http: IHttp) {}

  async getFlags(): Promise<IFlagDTO[]> {
    const response = await this.http.request({
      method: "GET",
      url: `${URI.apiUrl}/data/getAllFlags`,
    });
    return response.data.map((flag: IFlagParams) => new FlagDTO(flag));
  }
}

export default FlagRepository;
