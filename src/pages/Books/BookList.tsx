import React from "react";
import { useLoaderData } from "react-router-dom";

const BookList = () => {
  const data = useLoaderData();
  throw Error("data");
  console.log("data: ", data);
  return <div>BookList</div>;
};

export default BookList;
