'use client';
import Image from "next/image";
import Link from "next/link";
import "./page.css";
import { ProceedingButton } from "@/components/Button/button";
import { WalkInButton } from "@/components/Button/button";
import { regisBtnText } from "../constants";
import { walkInBtnText } from "../constants";
import backgroundImg from 'public/img/kangnai-fest-firstpage.svg'
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const onClickWalkin = () => {
    window.localStorage.setItem("regisAs", "walk-in")
  }
  const onClickPreRegistered = () => {
    window.localStorage.setItem("regisAs", "pre-regis")
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  })
  return (
    <div>
      <div className="home-container">
        <Image id="backgroundImg" src={backgroundImg} alt="backgroundImg" />
        {!isLoading && <div className="btn-container">
          <Link href={"/register-form"}>
            <ProceedingButton onClick={onClickPreRegistered} buttonText={regisBtnText} />
          </Link>
          <Link href={"/register-form"}>
            <WalkInButton onClick={onClickWalkin} buttonText={walkInBtnText} />
          </Link>
        </div>}
      </div>
    </div>
  );
}
