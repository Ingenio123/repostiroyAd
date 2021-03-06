import { useQuery, gql, useLazyQuery } from "@apollo/client";

const STUDENT_QUERY = gql`
  {
    student {
      _id
      email
    }
  }
`;
const STUDENT_ONE_QUERY = gql`
  query studentOne($email: String!) {
    studentOne(email: $email) {
      courses {
        lesson
        idiom
        kids
        lessonTotal
        _id
        expiresCours
      }
    }
  }
`;
const USERS_QUERY = gql`
  {
    users {
      email
    }
  }
`;

export const useGetStudents = () => {
  return useQuery(STUDENT_QUERY);
};

export const useGetOneStudent = () => {
  return useLazyQuery(STUDENT_ONE_QUERY);
};

export const useGetUsers = () => {
  return useQuery(USERS_QUERY);
};
