"use client";

import { NextButton } from "@/components/Button/button";
import { headRegis, nextBtnText } from "@/constants";

import bg01 from "/public/img/bg01.svg";
import arrow from "/public/img/arrow.svg";
import miniLogo from "public/img/miniLogo.svg";

import { FormRegisData } from "@/types/formData";
import axios from 'axios'
import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import "./page.css";
import RegisForm from "@/components/Form/form";
import { IntroducePage } from "@/components/IntroducePage";

const Page = () => {
  const [isShowIntro, setIsShowIntro] = useState<boolean>(false)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false)
  const [showSuccessRibbon,setShowSuccessRibbon] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormRegisData>({
    timestamp: '',
    id: '',
    name: '',
    gender: '',
    age: '',
    howDidYouFindUs: '',
    whatIsYourInterested: ''
  })
  const [isWalkin, setIsWalkin] = useState(false)
  // set a page for different user
  useEffect(() => {
    const regisAs = window.localStorage.getItem("regisAs")
    setIsWalkin(regisAs === "walk-in" ? true : false)
  })
  const onFormDataChange = useCallback((updatedFormData: Record<any, any>) => {
    setFormData((prev: FormRegisData) => ({
      ...prev,
      ...updatedFormData,
    }))
  }, [setFormData])
  const onSubmitRegisForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisableSubmit(true)
    setTimeout(() => {
      setShowSuccessRibbon(true)
    },1000)
    setTimeout(() => {
      setIsShowIntro(true)
      setShowSuccessRibbon(false)
    },2000)
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
    axios
      .post("/api/saveForm", {
        ...formData,
        id: Math.random() * 1000,
        timestamp: localISOTime,
      })
      .then(res => {
        setDisableSubmit(false)
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  useEffect(() => {

    // walk in case, need every field to not empty
    if (isWalkin) {
      if (
        !formData.name ||
        !formData.gender ||
        !formData.age ||
        !formData.howDidYouFindUs ||
        !formData.whatIsYourInterested
      ) {
        setDisableSubmit(true);
        return;
      }
    }

    // pre-regis case, name should be input
    if (
      !formData.name
    ) {
      setDisableSubmit(true);
      return;
    }

    //eneable the button when everything ok
    setDisableSubmit(false);
  }, [formData])

  return (
    <div>
      {showSuccessRibbon && <div className="success-notification">
        Register success
      </div> }
      {!isShowIntro ? <div className="regis-container">
        <Image id="bg01" src={bg01} alt="bg-01" />
        <Image id="miniLogo" src={miniLogo} alt="mini logo" />

        <div className="form-container">
          <RegisForm isWalkin={isWalkin} onFormDataChange={onFormDataChange} />
        </div>
        <div className="nextBtn-container">
          <NextButton isDisabled={disableSubmit} onClick={(e: React.MouseEvent<HTMLButtonElement>) => onSubmitRegisForm(e)} buttonText={nextBtnText} />
          <Image id="arrow" src={arrow} alt="arrow" />
        </div>
        <div className="text-container">
          <h2>{headRegis}</h2>
        </div>
      </div>
        :
        <IntroducePage />
      }
    </div>
  );
};

export default Page;
