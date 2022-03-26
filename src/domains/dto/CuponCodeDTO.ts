export interface ICuponCodeDTO {
  readonly _id: string;
  readonly caducado: boolean;
  readonly valor: number;
  readonly numberUses: number;
  readonly expiresCode: Date;
  readonly Codeval: string;
}

export interface ICuponCodeParams {
  _id: string;
  caducado: boolean;
  Valor: number;
  numberUses: number;
  expiresCode: Date;
  Codeval: string;
}

class CuponCodeDTO implements ICuponCodeDTO {
  readonly _id: string;
  readonly caducado: any;
  readonly valor: number;
  readonly numberUses: number;
  readonly expiresCode: Date;
  readonly Codeval: string;

  constructor(params: ICuponCodeParams) {
    this._id = params._id;
    this.caducado = params.caducado;
    this.valor = params.Valor;
    this.numberUses = params.numberUses;
    this.expiresCode = params.expiresCode;
    this.Codeval = params.Codeval;
  }
}

export default CuponCodeDTO;
