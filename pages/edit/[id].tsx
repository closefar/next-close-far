import { useRouter } from "next/router";
import React from "react";

const Edit = () => {
  const { id } = useRouter().query;

  return <div>{id}</div>;
};

export default Edit;
