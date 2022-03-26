import { ICuponEntity } from "../domains/aggregates/interfaces/iCuponAggregate";

export interface ICuponCodeVM {
  id: string;
  code: string;
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
  private readonly _code: string;
  //   private _comments: Array<ICommentEntity>;

  constructor(params: ICuponEntity) {
    this._id = params._id;
    this._caducado = params.caducado;
    this._expiresCode = params.expiresCode;
    this._numberUses = params.numberUses;
    this._valor = params.valor;
    this._code = params.Codeval;
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
  get code() {
    return this._code;
  }
}

export default CuponCodeVM;
