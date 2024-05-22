import React from "react";
import { BookTypes } from "../types/books.types";

interface DataProps {
  data: BookTypes;
}
export default function Book({ data }: DataProps) {
  return (
    <div>
      <ul>
        <p>{data.title}</p>
        <li>{data.isbn}</li>
      </ul>
    </div>
  );
}
