import React from "react";
import { useSearchParams } from "react-router-dom";

export default function NewsDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <p>News Id:{searchParams.get("id")}</p>
      <p>News title:{searchParams.get("title")}</p>
      <p>News content:{searchParams.get("content")}</p>
    </div>
  );
}
