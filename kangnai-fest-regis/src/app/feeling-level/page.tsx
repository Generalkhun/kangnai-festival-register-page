import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./page.css";
import { NextButton } from "@/components/Button/button";

import bg01 from "/public/img/BG01.svg";
import arrow from "/public/img/arrow.svg";

import { nextBtnText } from "@/constants";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div id="progress">
        <Image id="bg01" src={bg01} alt="bg-01" />
        <div id="progress-bar">
          <ul id="progress-num">
            <div className="step-line"></div>
            <button className="step"></button>
            <div className="step-line"></div>
            <button className="step"></button>
            <div className="step-line"></div>
            <button className="step active"></button>
            <div className="step-line"></div>
            <button className="step"></button>
          </ul>
        </div>
      </div>
      <Link href={"/emotional-check"}>
        <div className="nextBtn-container">
          <NextButton buttonText={nextBtnText} />
          <Image id="arrow" src={arrow} alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export default index;
