"use client";
import { notFound } from "next/navigation";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error laoding review");
  }

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
