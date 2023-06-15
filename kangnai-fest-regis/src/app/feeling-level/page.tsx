import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./page.css";
import { NextButton } from "@/components/Button/button";
import Slider from "@/components/Slider/slider";

import bg01 from "/public/img/BG01.svg";
import arrow from "/public/img/arrow.svg";
import unhappy from "/public/img/UNHAPPY.svg";
import neutral from "/public/img/NEUTRAL.svg";
import happy from "/public/img/HAPPY.svg";
import veryHappy from "/public/img/VERYHAPPY.svg";

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
        <Image id="emo-unhappy" src={unhappy} alt="feel unhappy" />
        <Image id="emo-neutral" src={neutral} alt="feel neutral" />
        <Image id="emo-happy" src={happy} alt="feel happy" />
        <Image id="emo-veryHappy" src={veryHappy} alt="feel veryhappy" />
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
        <h3 id="feel1">{feelbad}</h3>
        <h3 id="feel2">{feelgood}</h3>
      </div>
    </div>
  );
};

export default index;
