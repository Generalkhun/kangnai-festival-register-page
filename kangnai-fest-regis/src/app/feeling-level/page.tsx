import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./page.css";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <div id="progress">
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
        <button>next</button>
      </Link>
    </div>
  );
};

export default index;
