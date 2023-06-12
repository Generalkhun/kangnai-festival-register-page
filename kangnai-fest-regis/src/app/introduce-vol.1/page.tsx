import Link from "next/link";
import React from "react";
import { ProceedingButton } from "@/components/ProceedingButton";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div className="regis-container">
        <div className="head-container">introduce page</div>

        <Link href={"/emotional-check"}>
          <ProceedingButton buttonText={`ทักทายความพัง`} />
        </Link>
      </div>
    </div>
  );
};

export default index;
