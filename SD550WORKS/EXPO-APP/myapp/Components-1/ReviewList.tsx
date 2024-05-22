import React from "react";
import { ScrollView, View } from "react-native";
import ICourse, { Reviews } from "../types/Icourses";
import Review from "./Review";
interface ReviewListProps {
  data: ICourse;
}
export default function ReviewList({ data }: ReviewListProps) {
  return (
    <ScrollView>
      {data.reviews.map((review: Reviews, index) => (
        <Review key={index} data={review} />
      ))}
    </ScrollView>
  );
}
