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
    onFormDataChange({ name });
  }, [name]);
  useEffect(() => {
    onFormDataChange({ age: selectedAge });
  }, [selectedAge]);
  useEffect(() => {
    onFormDataChange({ howDidYouFindUs: selectedHow });
  }, [selectedHow]);
  useEffect(() => {
    onFormDataChange({ whatIsYourInterested: selectedInterested });
  }, [selectedInterested]);
  useEffect(() => {
    onFormDataChange({ gender });
  }, [gender]);
  const openHandler = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div className="regisform-container">
      {!isWalkin ? (
        <p>กรุณากรอกชื่อตามที่ได้ลงทะเบียนมาล่วงหน้า</p>
      ) : (
        <p>ชื่อ</p>
      )}

      {!isWalkin ? (
        <input
          className="name-input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="กรอกชื่อที่ลงทะเบียนล่วงหน้า"
        />
      ) : (
        <input
          className="name-input"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="โปรดกรอกชื่อของท่าน"
        />
      )}
      {isWalkin && (
        <>
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
              style={{ top: "290px" }}
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

              <option value="less than 18">น้อยกว่า 18 ปี</option>
              <option value="18-22">18 - 22 ปี</option>
              <option value="23-30">24 - 29 ปี</option>
              <option value="30-35">30 - 40 ปี</option>
              <option value="43-50">40 - 50 ปี</option>
              <option value="more than 50">50 ปีขึ้นไป</option>
            </select>
          </div>

          <label htmlFor="how">รู้จักงานนี้จากไหน</label>
          {isOpened ? (
            <Image
              id="dropIcon2"
              src={dropIcon}
              alt="drop icon"
              style={{ top: "390px" }}
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
            <option value="facebook">เห็นเพื่อนแชร์ใน Facebook</option>
            <option value="from friends">เพื่อนหรือคนรู้จักชวนมา</option>
            <option value="instagram">Instagram</option>
            <option value="muchimore page">ติดตามจาก page ของ muchimore</option>
            <option value="event shop">ติดตามร้านค้าที่มาออกบูธ</option>
            <option value="workshop process">
              ติดตามกระบวนการที่มาจัด workshop
            </option>
            <option value="">อื่นๆ</option>
          </select>

          <label htmlFor="feel">สิ่งที่สนใจในงาน</label>
          {isOpened ? (
            <Image
              id="dropIcon3"
              src={dropIcon}
              alt="drop icon"
              style={{ top: "490px" }}
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
            <option value="booth">สนใจบูธที่มาออกงาน</option>
            <option value="workshop">สนใจเข้าร่วมเวิร์คช็อป</option>
            <option value="free space">สนใจกิจกรรมกลางที่ Free space</option>
            <option value="ชอบรูปแบบงาน">ชอบแนวคิด และ/หรือ รูปแบบงาน</option>
            <option value="สนใจเรียนรู้">
              สนใจเรียนรู้โลกภายใน จิตใจ จิตวิญญาณ
            </option>
            <option value="เคยเข้าร่วมจึงติดตาม">
              เคยเข้าร่วม ข้ า ง ใ น เฟสติวัล จึงติดตามต่อ
            </option>
          </select>
        </>
      )}
    </div>
  );
};

export default RegisForm;
