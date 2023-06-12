import Link from "next/link";
import React from "react";
import Image from "next/image";

import { ProceedingButton } from "@/components/ProceedingButton";
import { introBtnText } from "@/constants";

import introHead from "/public/img/intro-head.png";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div className="head-container">
        <Image src={introHead} alt="introduce head" />
        <Link href={"/emotional-check"}>
          <ProceedingButton buttonText={introBtnText} />
        </Link>
      </div>
    </div>
  );
};

export default index;
