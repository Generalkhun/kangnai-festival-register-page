import React from "react";
import "./styles.css";
import { useState } from "react";

const RegisForm = function () {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedHow, setSelectedHow] = useState("");
  const [selectedFeel, setSelectedFeel] = useState("");

  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push(i);
  }

  const howOptions = [];

  return (
    <div className="regisform-container">
      <label htmlFor="age">อายุ</label>
      <div className="custom-age">
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
      <select
        id="form_how"
        value={selectedAge}
        onChange={(event) => setSelectedAge(event.target.value)}
      >
        <option id="option_how" value="" disabled hidden>
          โปรดเลือก
        </option>
        <option value="facebook">Facebook</option>
      </select>

      <label htmlFor="feel">สิ่งที่สนใจในงาน</label>
      <select
        id="form_feel"
        value={selectedAge}
        onChange={(event) => setSelectedAge(event.target.value)}
      >
        <option id="option_feel" value="" disabled hidden>
          โปรดเลือก
        </option>
        {ageOptions.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegisForm;
