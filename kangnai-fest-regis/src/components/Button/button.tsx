import React from "react";
import "./button.css";

type Props = {
  buttonText: string;
  onClick?: () => void
};

interface NextButtonProps {
  buttonText: string;
  onClick?: () => unknown
  isDisabled?: boolean
}
export const ProceedingButton = ({ buttonText,onClick }: Props) => {
  return <button onClick={onClick} className="proceeding_btn">{buttonText}</button>;
};

export const WalkInButton = ({ buttonText,onClick }: Props) => {
  return <button onClick={onClick} className="walkin_btn">{buttonText}</button>;
};

export const NextButton = ({ buttonText, onClick, isDisabled }: NextButtonProps) => {

  return isDisabled ? <button disabled={true} className="next_btn_disabled">{buttonText}</button> : <button onClick={onClick} className="next_btn">{buttonText}</button>;
};
