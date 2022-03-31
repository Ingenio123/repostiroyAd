export type StringOrNumber = string | number;
export interface IAddParamsFlag {
  flagId: Array<StringOrNumber>;
  idTeacher: string;
}

export interface IAddAsingFlagDTO {
  flagId: Array<StringOrNumber>;
  idTeacher: string;
}

class AssignFlagToTeacherDTO implements IAddAsingFlagDTO {
  readonly flagId: StringOrNumber[];
  readonly idTeacher: string;

  constructor(params: IAddParamsFlag) {
    this.flagId = params.flagId;
    this.idTeacher = params.idTeacher;
  }
}

export default AssignFlagToTeacherDTO;
