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
