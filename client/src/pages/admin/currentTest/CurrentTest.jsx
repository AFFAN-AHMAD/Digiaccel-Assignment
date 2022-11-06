import React from "react";
import { useParams } from "react-router-dom";

const CurrentTest = () => {
    const param = useParams()
  const { id } = param;
  console.log(id)
  return <div>{id} </div>;
};

export default CurrentTest;
