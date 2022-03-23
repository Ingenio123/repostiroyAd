import { ICuponEntity } from "../../../domains/aggregates/interfaces/iCuponAggregate";
export interface ICuponCodePresenter {
  getCuponCodes(): Promise<Array<ICuponEntity>>;
}
