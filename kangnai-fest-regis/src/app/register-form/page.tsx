"use client";

import { NextButton } from "@/components/Button/button";
import { headRegis, headConfirmRegis, nextBtnText } from "@/constants";

import bg01 from "/public/img/bg01.svg";
import arrow from "/public/img/arrow.svg";
import miniLogo from "public/img/miniLogo.svg";

import { FormRegisData } from "@/types/formData";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./page.css";
import RegisForm from "@/components/Form/form";

const index = () => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormRegisData>({
    timestamp: "",
    id: "",
    name: "",
    gender: "",
    age: "",
    howDidYouFindUs: "",
    whatIsYourInterested: "",
  });
  const [isWalkin, setIsWalkin] = useState(false);
  // set a page for different user
  useEffect(() => {
    const regisAs = window.localStorage.getItem("regisAs");
    setIsWalkin(regisAs === "walk-in" ? true : false);
  });
  const onFormDataChange = (updatedFormData: Record<any, any>) => {
    setFormData((prev: FormRegisData) => ({
      ...prev,
      ...updatedFormData,
    }));
  };
  const onSubmitRegisForm = () => {
    setDisableSubmit(true);
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, -1);
    axios
      .post("/api/saveForm", {
        ...formData,
        id: Math.random() * 1000,
        timestamp: localISOTime,
      })
      .then((res) => {
        setDisableSubmit(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
    if (!formData.name) {
      setDisableSubmit(true);
      return;
    }

    //eneable the button when everything ok
    setDisableSubmit(false);
  }, [formData]);

  return (
    <div>
      <div className="regis-container">
        <Image id="bg01" src={bg01} alt="bg-01" />
        <Image id="miniLogo" src={miniLogo} alt="mini logo" />

        <div className="form-container">
          <RegisForm isWalkin={isWalkin} onFormDataChange={onFormDataChange} />
        </div>
        <div className="nextBtn-container">
          <Link href={"/feeling-level"}>
            <NextButton
              isDisabled={disableSubmit}
              onClick={onSubmitRegisForm}
              buttonText={nextBtnText}
            />
            <Image id="arrow" src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className="text-regis-container">
          {isWalkin ? (
            <h2>{headRegis}</h2>
          ) : (
            <h2 style={{ left: "60px", fontSize: "37px" }}>
              {headConfirmRegis}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
