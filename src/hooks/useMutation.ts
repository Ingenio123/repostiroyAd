import { gql, useMutation } from "@apollo/client";
const ADD_LESSON = gql`
  mutation addLessonOneStudent(
    $email: String!
    $idPackage: String!
    $numClassAdd: Int!
  ) {
    addLessonOneStudent(
      email: $email
      idPackage: $idPackage
      numClassAdd: $numClassAdd
    )
  }
`;

const ADD_DATE_EXPIRES = gql`
  mutation addNewDateExpires(
    $email: String!
    $dateExpires: Date!
    $idPackage: String!
  ) {
    addNewDateExpires(
      email: $email
      dateExpires: $dateExpires
      idPackage: $idPackage
    )
  }
`;

const ADD_TEMARY = gql`
  mutation createTemary($nameLevel: String!, $content_param: String!) {
    createTemary(nameLevel: $nameLevel, content_param: $content_param)
  }
`;

const ADD_STUDENT = gql`
  mutation addNewStudent(
    $email: String!
    $lesson: String!
    $months: String!
    $time: String!
    $idiom: String!
    $kids: Boolean!
  ) {
    addNewStudent(
      email: $email
      lesson: $lesson
      months: $months
      time: $time
      idiom: $idiom
      kids: $kids
    )
  }
`;

export const useAddLesson = () => {
  const [addLessons, { data }] = useMutation(ADD_LESSON);
  return {
    addLessons,
    dataUseMutation: data,
  };
};

export const useAddNewExpiredPackage = () => {
  return useMutation(ADD_DATE_EXPIRES);
};

export const useAddNewTemary = () => {
  return useMutation(ADD_TEMARY);
};

export const useAddNewStudent = () => {
  return useMutation(ADD_STUDENT);
};
