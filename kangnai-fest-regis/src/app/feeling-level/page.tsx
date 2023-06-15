import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./page.css";
import { NextButton } from "@/components/Button/button";

import bg01 from "/public/img/BG01.svg";
import arrow from "/public/img/arrow.svg";

import { nextBtnText } from "@/constants";
import { headFeel1 } from "@/constants";
import { headFeel2 } from "@/constants";
import { headFeel3 } from "@/constants";
import { feelbad } from "@/constants";
import { feelgood } from "@/constants";

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
      <div className="text-container">
        <h2 id="head1">{headFeel1}</h2>
        <h2 id="head3">{headFeel3}</h2>
        <h2 id="head2">{headFeel2}</h2>
      </div>
    </div>
  );
};

export default index;
