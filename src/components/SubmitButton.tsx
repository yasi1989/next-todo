import React from "react";

type SubmitButtonProps = {
  pending: boolean;
  className?: string;
};

const SubmitButton = ({ pending, className = "" }: SubmitButtonProps) => {
  return (
    <button
      disabled={pending}
      className={`bg-green-400 px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 col-start-2 ${className}`}
    >
      送信
    </button>
  );
};

export default SubmitButton;
