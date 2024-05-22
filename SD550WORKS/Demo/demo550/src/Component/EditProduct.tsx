import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
export default function EditProduct() {
  const params = useParams();
  const [searchPrams] = useSearchParams();
  console.log(searchPrams.get("name"));
  return (
    <div>
      <p>edit Product</p>
      <p>{params.id}</p>
    </div>
  );
}
