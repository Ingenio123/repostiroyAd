export interface ICuponCodeDTO {
  readonly _id: string;
  readonly caducado: boolean;
  readonly valor: number;
  readonly numberUses: number;
  readonly expiresCode: Date;
}

export interface ICuponCodeParams {
  _id: string;
  caducado: boolean;
  Valor: number;
  numberUses: number;
  expiresCode: Date;
}

class CuponCodeDTO implements ICuponCodeDTO {
  readonly _id: string;
  readonly caducado: any;
  readonly valor: number;
  readonly numberUses: number;
  readonly expiresCode: Date;

  constructor(params: ICuponCodeParams) {
    this._id = params._id;
    this.caducado = params.caducado;
    this.valor = params.Valor;
    this.numberUses = params.numberUses;
    this.expiresCode = params.expiresCode;
  }
}

export default CuponCodeDTO;
