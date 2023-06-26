import Link from "next/link";
import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <div>
      <Link href={"/serverProps"}>
        <button>server props</button>
      </Link>
      <Link href={"/context"}>
        <button>context</button>
      </Link>
      <Link href={"/redux"}>
        <button>redux</button>
      </Link>
    </div>
  );
}
