import { ICuponEntity } from "../../aggregates/interfaces/iCuponAggregate";
export interface ICuponCode {
  getCupons(): Promise<Array<ICuponEntity>>;
}
