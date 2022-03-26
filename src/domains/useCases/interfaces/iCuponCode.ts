import { ICuponEntity } from "../../aggregates/interfaces/iCuponAggregate";
export interface ICuponCode {
  getCupons(): Promise<Array<ICuponEntity>>;
  addCuponCode(
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ): Promise<boolean>;
  deleteCupon(id: string): Promise<boolean>;
}
