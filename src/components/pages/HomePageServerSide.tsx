import { HomePageProps } from "@/src/models/pages/HomePageProps";
import React from "react";

export default function HomePage({ data }: HomePageProps) {
  return (
    <div>
      {data.map((it) => (
        <div key={it}>{it}</div>
      ))}
    </div>
  );
}
