import { ITeacherEntity, ITeacherData } from "./interfaces/iTeacher";

class Board implements ITeacherEntity {
  readonly _name: string;
  readonly _eslogan: string;
  readonly _description: string;
  readonly _interests: string;
  readonly _profBackground: string;
  readonly _imgUrl: string;

  constructor(params: ITeacherData) {
    this._name = params.name;
    this._eslogan = params.eslogan;
    this._description = params.description;
    this._interests = params.interests;
    this._profBackground = params.profBackground;
    this._imgUrl = params.imgUrl;
  }

  get name() {
    return this._name;
  }

  get eslogan() {
    return this._eslogan;
  }

  get description() {
    return this._description;
  }

  get interests() {
    return this._interests;
  }

  get profBackground() {
    return this._profBackground;
  }
  get imgUrl() {
    return this._imgUrl;
  }
}

export default Board;
