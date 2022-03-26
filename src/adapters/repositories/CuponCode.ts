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
  addCuponCode(
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ): Promise<boolean> {
    return this.http.request({
      method: "POST",
      url: `${env.apiUrl}/createCodeDescuento`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        codigo,
        descuento: discont,
        numero_usos,
        expiresCode: dateExpires,
      },
    });
  }
  delete(id: string): Promise<boolean> {
    return this.http.request({
      method: "DELETE",
      url: `${env.apiUrl}/data/delete/code/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default CuponCodeRepository;
