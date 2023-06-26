import { useAppSelector } from "@/src/hooks/useAppSelector";
import React from "react";

type Props = {};

export default function ReduxItems({}: Props) {
  const data = useAppSelector("data");
  return (
    <div>
      {" "}
      {data.items?.map((it) => (
        <div key={it}>{it}</div>
      ))}
    </div>
  );
}
