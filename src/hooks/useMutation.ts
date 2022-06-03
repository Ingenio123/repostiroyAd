import { gql, useMutation } from "@apollo/client";
const ADD_LESSON = gql`
  mutation addLessonOneStudent(
    $email: String!
    $idiom: String!
    $kids: Boolean!
    $numClassAdd: Int!
  ) {
    addLessonOneStudent(
      email: $email
      idiom: $idiom
      kids: $kids
      numClassAdd: $numClassAdd
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
