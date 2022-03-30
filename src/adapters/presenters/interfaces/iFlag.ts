import { IFlagEnitiy } from "../../../domains/aggregates/interfaces/iFlag";

export interface IFlagPresenter {
  getFlags(): Promise<Array<IFlagEnitiy>>;
}
