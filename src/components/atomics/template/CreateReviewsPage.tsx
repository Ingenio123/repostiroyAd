import { useEffect } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { FormReviews } from "../organismos/FormReviews";
import di from "../../../di";
import { useReviewListState } from "../../../hooks/ReviewRecoil";

const CreateReviewsPage = () => {
  useEffect(() => {
    const asyncFunction = async () => {
      await di.reviews.getReviews();
    };
    asyncFunction();
    return () => {};
  }, []);

  return (
    <>
      <Heading
        as="h2"
        fontWeight="bold"
        fontSize="3xl"
        lineHeight="normal"
        mt="1rem"
        textAlign="center"
      >
        Reviews of Students
      </Heading>
      <Stack
        border="1px solid blue"
        width="100%"
        mt="30px"
        spacing="24"
        direction={"row"}
      >
        <FormReviews />
      </Stack>
    </>
  );
};
export default CreateReviewsPage;
