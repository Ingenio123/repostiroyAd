import { IHttp } from "./../infrastructures/interfaces/iHttp";
import { ICuponCodeRepository } from "./../../domains/useCases/repository-interfaces/iCuponCode";
import CuponCodeDTO, {
  ICuponCodeDTO,
  ICuponCodeParams,
} from "../../domains/dto/CuponCodeDTO";
import env from "../../envConfig";
//
class CuponCodeRepository implements ICuponCodeRepository {
  constructor(readonly http: IHttp) {}

  async getCupons(): Promise<Array<ICuponCodeDTO>> {
    const response = await this.http.request({
      method: "GET",
      url: `${env.apiUrl}/getCuponCode`,
      headers: {
        "Content-Type": "application/json",
        // "Authorization":`Bearer ${token}`
      },
    });
    return response.codes.map(
      (code: ICuponCodeParams) => new CuponCodeDTO(code)
    );
  }
}

export default CuponCodeRepository;
