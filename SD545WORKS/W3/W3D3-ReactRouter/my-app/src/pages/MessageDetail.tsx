import React from "react";
import { useParams } from "react-router-dom";

export default function MessageDetail() {
  const obj = useParams();
  const { id, title, content } = obj;
  return (
    <div>
      <p>Message Id:{id}</p>
      <p>Message title:{title}</p>
      <p>Message content:{content}</p>
    </div>
  );
}
