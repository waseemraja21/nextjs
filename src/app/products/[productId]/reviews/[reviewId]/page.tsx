import { notFound } from "next/navigation";
import React from "react";

function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  );
}

export default ReviewDetail;
