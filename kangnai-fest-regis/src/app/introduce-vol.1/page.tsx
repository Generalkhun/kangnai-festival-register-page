import Link from "next/link";
import React from "react";

import { ProceedingButton } from "@/components/ProceedingButton";
import { introBtnText } from "@/constants";

import introHead from "/public/img/intro-head.png";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div className="regis-container">
        <div className="head-container">
          {/* <image src={introHead} alt="Introduce Head" /> */}

          <Link href={"/emotional-check"}>
            <ProceedingButton buttonText={introBtnText} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
