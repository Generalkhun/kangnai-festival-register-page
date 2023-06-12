import { ProceedingButton } from "@/components/Button";
import Link from "next/link";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      emotional check
      <Link href={"/feeling-card"}>
        <ProceedingButton buttonText={`ต่อไป`} />
      </Link>
    </div>
  );
};

export default index;
