export interface ITeacherParams {
  firstName: string;
  eslogan: string;
  description: string;
  Interests: string;
  profesionalBackround: string;
  imageUrl: string;
}

export interface ITeacherDTO {
  _name: string;
  _eslogan: string;
  _description: string;
  _interests: string;
  _profBackground: string;
  _imgUrl: string;
}

class TeacherDTO implements ITeacherDTO {
  readonly _name: string;
  readonly _eslogan: string;
  readonly _description: string;
  readonly _interests: string;
  readonly _profBackground: string;
  readonly _imgUrl: string;

  constructor(params: ITeacherParams) {
    this._name = params.firstName;
    this._eslogan = params.eslogan;
    this._description = params.description;
    this._interests = params.Interests;
    this._profBackground = params.profesionalBackround;
    this._imgUrl = params.imageUrl;
  }
}

export default TeacherDTO;
