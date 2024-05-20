import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const { id } = useRouter().query;

  return <div>{id}</div>;
};

export default Details;
