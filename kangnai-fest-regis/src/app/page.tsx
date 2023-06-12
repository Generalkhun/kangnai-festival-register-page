import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { ProceedingButton } from "@/components/ProceedingButton";
import { WalkInButton } from "@/components/ProceedingButton";
import { regisBtnText } from "../constants";
import { walkInBtnText } from "../constants";
import { headText1 } from "../constants";
import { headText2 } from "../constants";

//-------------------image-----------------------//
import festLogo from "/public/img/LOGO.png";
import birds from "/public/img/birds.png";
import gradBlue from "/public/img/gradient-blue2.png";
import bgWhite from "/public/img/bg-white.png";
import spon1 from "/public/img/spon1.png";
import spon2 from "/public/img/spon2.png";
import spon3 from "/public/img/spon3.png";
import human from "/public/img/human.png";
import cloud1 from "/public/img/cloud1.png";
import cloud2 from "/public/img/cloud2.png";
import breeze from "/public/img/breeze.png";
import line from "/public/img/เส้นคั่น.png";
//----------------------------------------------//

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <Image id="grad-blue" src={gradBlue} alt="gradient-blue" />
        <Image id="festLogo" src={festLogo} alt="Fest Logo" />
        <Image id="bg-white" src={bgWhite} alt="bg-white" />
        <Image id="human" src={human} alt="human" />
        <Image id="cloud1" src={cloud1} alt="cloud1" />
        <Image id="cloud2" src={cloud2} alt="cloud2" />
        <Image id="breeze" src={breeze} alt="breeze" />
        <Image id="birds" src={birds} alt="Three birds" />

        <div className="body-container">
          <h3>{headText1}</h3>
          <h2>{headText2}</h2>
        </div>
        <div className="btn-container">
          <Link href={"/register-form"}>
            <ProceedingButton buttonText={regisBtnText} />
          </Link>
          <Link href={"/introduce-vol.1"}>
            <WalkInButton buttonText={walkInBtnText} />
          </Link>
        </div>
        <ul className="foot-container">
          <li className="list-spon1">
            <Image src={spon1} alt="spon1" />
          </li>
          <Image src={line} alt="line" />

          <li className="list-spon2">
            <Image src={spon2} alt="spon2" />
          </li>
          <Image src={line} alt="line" />

          <li className="list-spon3">
            <Image src={spon3} alt="spon3" />
          </li>
        </ul>
      </div>
    </div>
  );
}
