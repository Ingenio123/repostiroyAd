import { ICuponEntity } from "../../../domains/aggregates/interfaces/iCuponAggregate";
export interface ICuponCodePresenter {
  getCuponCodes(): Promise<Array<ICuponEntity>>;
  addCuponCode(
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
