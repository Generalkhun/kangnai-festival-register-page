import React from "react";
import "./styles.css";

type Props = {
  buttonText: string;
};
export const ProceedingButton = ({ buttonText }: Props) => {
  return <button className="btn">{buttonText} </button>;
};
