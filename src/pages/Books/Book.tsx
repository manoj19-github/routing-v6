import React from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const params = useParams();
  return (
    <div>
      <h1>book</h1>
      <h1>{params.id}</h1>
    </div>
  );
};

export default Book;
