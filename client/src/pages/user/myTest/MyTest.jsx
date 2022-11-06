import React from "react";
import { useParams } from "react-router-dom";

const MyTest = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default MyTest;
