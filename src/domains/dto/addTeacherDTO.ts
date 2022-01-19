export interface IAddParams {
  name: string;
  LastName: string;
  eslogan: string;
  description: string;
  interests: string;
  profBackground: string;
}

export interface IAddtDTO {
  name: string;
  LastName: string;
  eslogan: string;
  description: string;
  interests: string;
  profBackground: string;
}

class CommentDTO implements IAddtDTO {
  readonly name: string;
  readonly LastName: string;
  readonly eslogan: string;
  readonly description: string;
  readonly interests: string;
  readonly profBackground: string;

  constructor(params: IAddParams) {
    this.name = params.name;
    this.LastName = params.LastName;
    this.eslogan = params.eslogan;
    this.description = params.description;
    this.interests = params.interests;
    this.profBackground = params.profBackground;
  }
}

export default CommentDTO;
