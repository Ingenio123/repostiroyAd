export interface IFlagDTO {
  readonly _id: string;
  readonly nameFlag: string;
  readonly urlFlag: string;
  readonly teachers: [];
}

export interface IFlagParams {
  _id: string;
  nameFlag: string;
  urlFlag: string;
  teachers: [];
}
class FlagDTO implements IFlagDTO {
  readonly _id: string;
  readonly nameFlag: string;
  readonly urlFlag: string;
  readonly teachers: [];

  constructor(params: IFlagParams) {
    this._id = params._id;
    this.nameFlag = params.nameFlag;
    this.urlFlag = params.urlFlag;
    this.teachers = params.teachers;
  }
}
export default FlagDTO;
