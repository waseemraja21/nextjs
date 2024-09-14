import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products" replace>
        Products
      </Link>
    </>
  );
}

export default page;
