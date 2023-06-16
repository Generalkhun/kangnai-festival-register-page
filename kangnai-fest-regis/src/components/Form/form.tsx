import React, { useEffect } from "react";
import Image from "next/image";
import "./form.css";
import { useState } from "react";

import dropIcon from "/public/img/dropIcon.svg";
import CustomForm from "../FormCustom/formCustom";
interface RegisFormProps {
  onFormDataChange: (updatedFormData: Record<any, any>) => void;
  isWalkin: boolean;
}
const RegisForm = function ({ onFormDataChange, isWalkin }: RegisFormProps) {

  const [name, setName] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedHow, setSelectedHow] = useState("");
  const [selectedInterested, setSelectedInterested] = useState("");
  const [gender, setGender] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  // form data update
  useEffect(() => {
    onFormDataChange({ name })
  }, [name, onFormDataChange])
  useEffect(() => {
    onFormDataChange({ age: selectedAge })
  }, [selectedAge, onFormDataChange])
  useEffect(() => {
    onFormDataChange({ howDidYouFindUs: selectedHow })
  }, [selectedHow, onFormDataChange])
  useEffect(() => {
    onFormDataChange({ whatIsYourInterested: selectedInterested })
  }, [selectedInterested, onFormDataChange])
  useEffect(() => {
    onFormDataChange({ gender })
  }, [gender, onFormDataChange])
  const openHandler = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div className="regisform-container">
      <div style={{
        fontWeight: '600px',
        fontSize: '16px',
      }}>
        {!isWalkin ? "กรุณากรอกชื่อตามที่ได้ลงทะเบียนมาล่วงหน้า" : "ชื่อ"}
      </div>
      <input
      style={{
        width: '348px',
        height: '58px',
        borderRadius: '8px',
        fontSize: '16px',
        borderStyle: 'none'
      }}
        placeholder= {!isWalkin ? "กรุณากรอกชื่อตามที่ได้ลงทะเบียนมาล่วงหน้า" : "ชื่อ"}
        className="name-input"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div></div>
      {isWalkin && <>
        <label className="gender" htmlFor="gender">
          เพศ
        </label>
        <div className="checkbox-container">
          <input
            className="check01"
            type="radio"
            checked={gender === "male"}
            onChange={() => setGender("male")}
            onClick={() => setIsOpened(false)}
          />
          <label className="gender_pick" htmlFor="man">
            ชาย
          </label>
          <input
            className="check01"
            type="radio"
            checked={gender === "female"}
            onChange={() => setGender("female")}
            onClick={() => setIsOpened(false)}
          />
          <label className="gender_pick" htmlFor="woman">
            หญิง
          </label>
          <input
            className="check01"
            type="radio"
            checked={gender === "others"}
            onChange={() => setGender("others")}
            onClick={openHandler}
          />
          <label className="gender_pick" htmlFor="woman">
            ให้ฉันเขียนเอง
          </label>
        </div>
        {isOpened ? <CustomForm setGender={setGender} /> : ""}

        <label htmlFor="age">อายุ</label>
        {isOpened ? (
          <Image
            id="dropIcon"
            src={dropIcon}
            alt="drop icon"
            style={{ top: "190px" }}
          />
        ) : (
          <Image id="dropIcon" src={dropIcon} alt="drop icon" />
        )}
        <div className="dropdown-age">
          <select
            className="form_age"
            value={selectedAge}
            onChange={(event) => setSelectedAge(event.target.value)}
          >
            <option value="" disabled hidden>
              โปรดเลือก
            </option>

            <option value="1-9">1 - 9</option>
            <option value="10-17">10 - 17</option>
            <option value="18-23">18 - 23</option>
            <option value="24-29">24 - 29</option>
            <option value="30-35">30 - 35</option>
            <option value="36-42">36 - 42</option>
            <option value="43-50">43 - 50</option>
            <option value="51-60">51 - 60</option>
            <option value="61-70">61 - 70</option>
            <option value="71-">71 เป็นต้นไป</option>
          </select>
        </div>

        <label htmlFor="how">รู้จักงานนี้จากไหน</label>
        {isOpened ? (
          <Image
            id="dropIcon2"
            src={dropIcon}
            alt="drop icon"
            style={{ top: "290px" }}
          />
        ) : (
          <Image id="dropIcon2" src={dropIcon} alt="drop icon" />
        )}
        <select
          id="form_how"
          value={selectedHow}
          onChange={(event) => setSelectedHow(event.target.value)}
        >
          <option id="option_how" value="" disabled hidden>
            โปรดเลือก
          </option>
          <option value="facebook">Facebook</option>
          <option value="instragram">Instragram</option>
          <option value="tiktok">Tiktok</option>
        </select>

        <label htmlFor="feel">สิ่งที่สนใจในงาน</label>
        {isOpened ? (
          <Image
            id="dropIcon3"
            src={dropIcon}
            alt="drop icon"
            style={{ top: "390px" }}
          />
        ) : (
          <Image id="dropIcon3" src={dropIcon} alt="drop icon" />
        )}

        <select
          id="form_feel"
          value={selectedInterested}
          onChange={(event) => setSelectedInterested(event.target.value)}
        >
          <option id="option_feel" value="" disabled hidden>
            โปรดเลือก
          </option>
          <option value="สนใจบูธที่มาออกงาน">สนใจบูธที่มาออกงาน</option>
          <option value="สนใจเข้าร่วมเวิร์คช็อป">สนใจเข้าร่วมเวิร์คช็อป</option>
          <option value="สนใจกิจกรรมกลางที่ Free space">สนใจกิจกรรมกลางที่ Free space</option>
          <option value="ชอบแนวคิด และ/หรือ รูปแบบงาน">ชอบแนวคิด และ/หรือ รูปแบบงาน</option>
          <option value="สนใจเรียนรู้โลกภายใน จิตใจ จิตวิญญาณ">สนใจเรียนรู้โลกภายใน จิตใจ จิตวิญญาณ</option>
          <option value="เคยเข้าร่วม ข้ า ง ใ น เฟสติวัล จึงติดตามต่อ">เคยเข้าร่วม ข้ า ง ใ น เฟสติวัล จึงติดตามต่อ</option>
        </select>
      </>}
    </div>
  );
};

export default RegisForm;
