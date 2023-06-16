"use client"
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import "./page.css";
import { NextButton } from "@/components/Button/button";

import bg01 from "../../public/img/bg01.svg";
import arrow from "../../public/img/arrow.svg";
import unhappy from "../../public/img/unhappy.svg";
import neutral from "../../public/img/neutral.svg";
import happy from "../../public/img/happy.svg";
import veryHappy from "../../public/img/veryhappy.svg";

import { nextBtnText } from "@/constants";
import { headFeel1 } from "@/constants";
import { headFeel2 } from "@/constants";
import { headFeel3 } from "@/constants";
import { feelbad } from "@/constants";
import { feelgood } from "@/constants";

const index = () => {
  const [level, setLevel] = useState(1);

  const handleSlide = (event: any) => {
    const value = event.target.value;
    setLevel(parseInt(value));
  };
  const renderFeeling = useCallback(() => {
    if (!level) {
      return <Image id="emo-unhappy" src={unhappy} alt="feel unhappy" />;
    }
    if (level <= 2) {
      return <Image id="emo-unhappy" src={unhappy} alt="feel unhappy" />
    } else if (level <= 4) {
      return <Image id="emo-neutral" src={neutral} alt="feel neutral" />
    } else if (level <= 6) {
      return <Image id="emo-happy" src={happy} alt="feel happy" />
    }
    return <Image id="emo-veryHappy" src={veryHappy} alt="feel veryhappy" />
  }, [level])
  return (
    <div>
      <div id="progress">
        <Image id="bg01" src={bg01} alt="bg-01" />
        <div className="emo-container">
          {renderFeeling()}
        </div>

        <input
          type="range"
          min="1"
          max="8"
          value={level}
          onChange={handleSlide}
          style={{
            width: '316px',
            height: '15px',
            position: 'absolute',
            top: '470px',
            left: '56px',
            accentColor: '#6EBEC7',
          }}
        />
        <p>Selected level: {level}</p>
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