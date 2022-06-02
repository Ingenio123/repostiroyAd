import { useQuery, gql,useMutation } from "@apollo/client";

const STUDENT_QUERY = gql`
  {
    student {
      _id
      email
    }
  }
`;
const ADD_LESSON  =  gql`
  {
    mutation 
  }
`

export const useGetStudents = () => {
  return useQuery(STUDENT_QUERY);
};

export const  useAddLessons = () => {
  return useMutation(ADD_LESSON);
}