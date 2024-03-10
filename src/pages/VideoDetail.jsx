import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const params = useParams();
  console.log(params);
  return <h2>Video Detail Page</h2>;
}
