import { Heading, Stack } from "@chakra-ui/react";
import { FormReviews } from "../organismos/FormReviews";
const CreateReviewsPage = () => {
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
