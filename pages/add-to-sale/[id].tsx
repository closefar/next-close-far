import React from "react";
import { useRouter } from "next/router";

const AddToSale = () => {
  const { id } = useRouter().query;

  return <div>{id}</div>;
};

export default AddToSale;
