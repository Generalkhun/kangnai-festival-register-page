import React from "react";
import "./button.css";

type Props = {
  buttonText: string;
};
export const ProceedingButton = ({ buttonText }: Props) => {
  return <button className="proceeding_btn">{buttonText}</button>;
};

export const WalkInButton = ({ buttonText }: Props) => {
  return <button className="walkin_btn">{buttonText}</button>;
};

export const NextButton = ({ buttonText }: Props) => {
  return <button className="next_btn">{buttonText}</button>;
};
