import { useAppSelector } from "@/src/hooks/useAppSelector";
import React from "react";

export default function ReduxItem() {
  const data = useAppSelector("data");
  return (
    <div>
      {data.item}
    </div>
  );
}
