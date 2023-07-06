import { useAppSelector } from "@/src/hooks/useAppSelector";
import Link from "next/link";
import React from "react";

type Props = {};

export default function ReduxItems({}: Props) {
  const data = useAppSelector("data");
  return (
    <div>
      {" "}
      {data.items?.map((it) => (
        <div key={it}><Link href={`/tasks/${it}`} >{it}</Link></div>
      ))}
    </div>
  );
}
