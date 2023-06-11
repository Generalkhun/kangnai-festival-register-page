import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { ProceedingButton } from "@/components/ProceedingButton";
import festLogo from "/public/img/LOGO.png";
import gradBlue from "/public/img/gradient-blue.png";
import gradYellow from "/public/img/gradient-yellow.png";
import bgBlue from "/public/img/bg-blue.png";
import spon1 from "/public/img/spon1.png";
import spon2 from "/public/img/spon2.png";
import spon3 from "/public/img/spon3.png";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <Image id="grad-blue" src={gradBlue} alt="gradient-blue"></Image>
        <Image id="festLogo" src={festLogo} alt="Fest Logo" />
        <Image id="grad-yellow" src={gradYellow} alt="gradient-yellow"></Image>
        <Image id="bg-blue" src={bgBlue} alt="bg-blue"></Image>

        <div className="body-container">
          <h3>พาตัวและใจกลับมาข้างในเพื่อ</h3>
          <h2>โอบกอดความพังในใจเรา</h2>
        </div>
        <Link href={"/register-form"} className="btn-container">
          <ProceedingButton buttonText={`ลงทะเบียนเข้างาน `} />
        </Link>
        <ul className="foot-container">
          <li className="list-spon1">
            <Image src={spon1} alt="spon1" />
          </li>
          <li className="list-spon2">
            <Image src={spon2} alt="spon2" />
          </li>
          <li className="list-spon3">
            <Image src={spon3} alt="spon3" />
          </li>
        </ul>
      </div>
    </div>
  );
}
