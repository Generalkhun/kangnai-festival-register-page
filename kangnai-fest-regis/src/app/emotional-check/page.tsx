import Link from "next/link";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      emotional check
      <Link href={"/feeling-card"}>
        <button>next</button>
      </Link>
    </div>
  );
};

export default index;
