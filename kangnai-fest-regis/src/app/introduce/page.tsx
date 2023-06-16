"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./page.css";

import { NextButton } from "@/components/Button/button";

import { introBtnText } from "@/constants";
import { introText1 } from "@/constants";
import { introText2 } from "@/constants";

//-------------------image-----------------------//
import introHead from "/public/img/intro-head.svg";
import vol1 from "/public/img/vol1.svg";
import bg02 from "/public/img/BG02.svg";
import arrow from "/public/img/arrow.svg";
//----------------------------------------------//

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <div className="intro-container">
        <Image id="bg02" src={bg02} alt="bg-02" />
        <Image id="vol1" src={vol1} alt="vol.1" />
        <Image id="intro-head" src={introHead} alt="introduce head" />

        <div className="text-container">
          <h2>{introText1}</h2>
          <br />
          <h3>{introText2}</h3>
        </div>
        <div className="nextBtn-container">
          <Link href={"/feeling-level"}>
            <NextButton buttonText={introBtnText} />
            <Image id="arrow" src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
