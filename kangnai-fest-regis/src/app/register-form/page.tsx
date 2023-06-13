"use client";

import { NextButton } from "@/components/Button";
import { headRegis, nextBtnText } from "@/constants";

import bg01 from "/public/img/bg01.svg";
import arrow from "/public/img/arrow.svg";
import miniLogo from "public/img/miniLogo.svg";

// import { FormRegisData } from "@/types/formData";
// import axios from 'axios'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "./page.css";
import RegisForm from "@/components/Form";

type Props = {};

const index = (props: Props) => {
  // const [formData, setFormData] = useState<FormRegisData>({
  //     timestamp: '',
  //     id: 'testId',
  //     nickname: 'testNickName',
  //     name: 'testName',
  //     surname: 'testSurname',
  //     dateOfBirth: 'testDateOfBirth',
  //     contact: 'testContact',
  //     howDidYouFindUs: 'testhowDidYouFindUs',
  //     whatIsYourInterested: 'testwhatIsYourInterested'
  // })
  // const onSubmitRegisForm = () => {
  //     var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  //     var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
  //     axios
  //         .post("/api/saveForm", {
  //             ...formData,
  //             timestamp: localISOTime,
  //         })
  //         .then(res => {
  //             console.log(res);
  //         })
  //         .catch(err => {
  //             console.log(err.message);
  //         });
  // }

  return (
    <div>
      <div className="regis-container">
        <Image id="bg01" src={bg01} alt="bg-01" />
        <Image id="miniLogo" src={miniLogo} alt="mini logo" />

        <div className="text-container">
          <h2>{headRegis}</h2>
        </div>
        <div className="form-container">
          <RegisForm />
        </div>
        <div className="nextBtn-container">
          <Link href={"/emotional-check"}>
            <NextButton buttonText={nextBtnText} />
            <Image id="arrow" src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
