import { useDataState } from "@/src/contexts/DataContext/DataContext";
import React from "react";

type Props = {};

export default function Items({}: Props) {
  const { data } = useDataState();
  return (
    <div>
      {" "}
      {data.map((it) => (
        <div key={it}>{it}</div>
      ))}
    </div>
  );
}
