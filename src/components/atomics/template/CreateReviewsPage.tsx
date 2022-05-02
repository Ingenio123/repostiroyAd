import { useEffect, useCallback, useState } from "react";
import { Heading, Stack, HStack } from "@chakra-ui/react";
import { FormReviews } from "../organismos/FormReviews";
import di from "../../../di";
import { useReviewListState } from "../../../hooks/ReviewRecoil";
import ReviewVM from "../../../vm/ReviewsList";
import TableReviews from "../organismos/TableReviews";

const CreateReviewsPage = () => {
  const [listReviews, setListReviews] = useReviewListState();
  //
  const reviewVM = listReviews.map(
    (reviewEntity) => new ReviewVM(reviewEntity)
  );

  useEffect(() => {
    const asyncFunction = async () => {
      let datos = await di.reviews.getReviews();
      setListReviews(datos);
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
      <Stack width="100%" mt="30px" direction={"row"}>
        <FormReviews />
        <TableReviews listData={reviewVM} />
      </Stack>
    </>
  );
};
export default CreateReviewsPage;
