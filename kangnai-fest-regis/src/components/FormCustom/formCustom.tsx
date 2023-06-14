import React from "react";
import "./formCustom.css";

const CustomForm = function () {
  return (
    <div>
      <div className="custom-form-container">
        <div className="custom-form">
          <input type="text" placeholder="โปรดเขียนเพศของคุณ" />
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
