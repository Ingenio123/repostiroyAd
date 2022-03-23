import { ICuponEntity } from "../domains/aggregates/interfaces/iCuponAggregate";

export interface ICuponCodeVM {
  id: string;
  caducado: boolean;
  expiresCode: Date;
  numberUses: number;
  valor: number;
}

class CuponCodeVM implements ICuponCodeVM {
  private readonly _id: string;
  private readonly _caducado: boolean;
  private readonly _expiresCode: Date;
  private readonly _numberUses: number;
  private readonly _valor: number;
  //   private _comments: Array<ICommentEntity>;

  constructor(params: ICuponEntity) {
    this._id = params._id;
    this._caducado = params.caducado;
    this._expiresCode = params.expiresCode;
    this._numberUses = params.numberUses;
    this._valor = params.valor;
  }

  get id() {
    return this._id;
  }

  get caducado() {
    return this._caducado;
  }

  get expiresCode() {
    return this._expiresCode;
  }

  get numberUses() {
    return this._numberUses;
  }

  get valor() {
    return this._valor;
  }
}

export default CuponCodeVM;
