import React from "react";
import "./styles.css";
import { useState } from "react";

const RegisForm = function () {
  const [selectedAge, setSelectedAge] = useState("");

  const ageOptions = [];
  for (let i = 1; i <= 100; i++) {
    ageOptions.push(i);
  }

  return (
    <div className="regisform-container">
      <label htmlFor="age">อายุ</label>
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

      <label htmlFor="age">อายุ</label>
      <select
        id="form_age"
        value={selectedAge}
        onChange={(event) => setSelectedAge(event.target.value)}
      >
        <option id="option_age" value="" disabled hidden>
          โปรดเลือก
        </option>
        {ageOptions.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>

      <label htmlFor="age">อายุ</label>
      <select
        id="form_age"
        value={selectedAge}
        onChange={(event) => setSelectedAge(event.target.value)}
      >
        <option id="option_age" value="" disabled hidden>
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
