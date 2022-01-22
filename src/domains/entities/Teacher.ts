import { IAddEntity, ITeacherData } from "./interfaces/iTeacher";

class Teacher implements IAddEntity {
  // private readonly _id: string;
  private readonly _id: string;
  private readonly _name: string;
  private readonly _fullname: string;
  private readonly _description: string;
  private readonly _eslogan: string;
  private readonly _profBackground: string;
  private readonly _interets: string;
  private readonly _imgUrl: string;

  constructor(params: ITeacherData) {
    this._id = params.id;
    this._name = params.name;
    this._fullname = params.fullname;
    this._description = params.description;
    this._eslogan = params.eslogan;
    this._profBackground = params.profBackground;
    this._interets = params.interets;
    this._imgUrl = params.imageTeacher;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get fullname() {
    return this._fullname;
  }

  get description() {
    return this._description;
  }

  get eslogan() {
    return this._eslogan;
  }

  get profBackground() {
    return this._profBackground;
  }
  get interets() {
    return this._interets;
  }
  get imgUrl() {
    return this._imgUrl;
  }
}

export default Teacher;
