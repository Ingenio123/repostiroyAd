import { ICuponCodeDTO } from "../../dto/CuponCodeDTO";
export interface ICuponCodeRepository {
  getCupons(): Promise<Array<ICuponCodeDTO>>;
}
