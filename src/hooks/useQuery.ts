import { useQuery, gql } from "@apollo/client";

const STUDENT_QUERY = gql`
  {
    student {
      _id
      email
    }
  }
`;
export const useGetStudents = () => {
  return useQuery(STUDENT_QUERY);
};
