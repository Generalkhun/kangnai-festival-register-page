import React from "react";

type Props = {
  buttonText: string;
};
export const ProceedingButton = ({ buttonText }: Props) => {
  return <button style={{ backgroundColor: "#BF83CB" }}>{buttonText}</button>;
};
