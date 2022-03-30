import { IFlagEnitiy } from "./../domains/aggregates/interfaces/iFlag";
export interface IFlagVM {
  id: string;
  name_flag: string;
  teachers_flag: [];
  url_image: string;
}

class FlagVM implements IFlagVM {
  private readonly _id: string;
  private readonly _nameFlag: string;
  private readonly _teachers: [];
  private readonly _url: string;

  constructor(params: IFlagEnitiy) {
    this._id = params._id;
    this._nameFlag = params.nameFlag;
    this._url = params.urlFlag;
    this._teachers = params.teachers;
  }

  get id() {
    return this._id;
  }
  get name_flag() {
    return this._nameFlag;
  }
  get url_image() {
    return this._url;
  }
  get teachers_flag() {
    return this._teachers;
  }
}

export default FlagVM;
