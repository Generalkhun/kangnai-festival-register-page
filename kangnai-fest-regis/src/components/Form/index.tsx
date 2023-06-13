import React from "react";
import Image from "next/image";
import "./styles.css";
import { useState } from "react";

import dropIcon from "/public/img/dropIcon.svg";

const RegisForm = function () {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedHow, setSelectedHow] = useState("");
  const [selectedFeel, setSelectedFeel] = useState("");

  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push(i);
  }

  return (
    <div className="regisform-container">
      <label htmlFor="age">อายุ</label>
      <div className="custom-age">
        <Image id="dropIcon" src={dropIcon} alt="drop icon" />
        <select
          id="form_age"
          value={selectedAge}
          onChange={(event) => setSelectedAge(event.target.value)}
        >
          <option id="option_age" value="" disabled hidden>
            โปรดเลือก
          </option>
          {ageOptions.map((age) => (
            <option id="age_num" key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

      <label htmlFor="how">รู้จักงานนี้จากไหน</label>
      <Image id="dropIcon2" src={dropIcon} alt="drop icon" />
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
      <Image id="dropIcon3" src={dropIcon} alt="drop icon" />
      <select
        id="form_feel"
        value={selectedFeel}
        onChange={(event) => setSelectedFeel(event.target.value)}
      >
        <option id="option_feel" value="" disabled hidden>
          โปรดเลือก
        </option>
        <option value="workshop">Workshop</option>
        <option value="workshop2">Workshop2</option>
        <option value="workshop3">workshop3</option>
      </select>
    </div>
  );
};

export default RegisForm;
