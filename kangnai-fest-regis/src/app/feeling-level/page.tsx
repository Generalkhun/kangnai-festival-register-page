import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./page.css";
import { NextButton } from "@/components/Button/button";

import bg01 from "/public/img/BG01.svg";
import arrow from "/public/img/arrow.svg";

import { introBtnText } from "@/constants";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div id="progress">
        <Image src={bg01} alt="bg-01"></Image>
        <div id="progress-bar">
          <ul id="progress-num">
            <button className="step"></button>
            <button className="step"></button>
            <button className="step active"></button>
            <button className="step"></button>
          </ul>
        </div>
      </div>
      <Link href={"/emotional-check"}>
        <NextButton buttonText={introBtnText} />
        <Image id="arrow" src={arrow} alt="arrow" />
      </Link>
    </div>
  );
};

export default index;
