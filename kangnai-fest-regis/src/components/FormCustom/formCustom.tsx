import React from "react";
import "./formCustom.css";
interface Props {
  setGender: any
}
const CustomForm = function ({setGender}:Props) {
  return (
    <div>
      <div className="custom-form-container">
        <div className="custom-form">
          <input onChange={(e) => setGender(e.target.value)} type="text" placeholder="โปรดเขียนเพศของคุณ" />
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
