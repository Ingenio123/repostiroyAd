import { ICuponCodeDTO } from "../../dto/CuponCodeDTO";
export interface ICuponCodeRepository {
  getCupons(): Promise<Array<ICuponCodeDTO>>;
  addCuponCode(
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
