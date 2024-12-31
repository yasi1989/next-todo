import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 col-start-2"
    >
      送信
    </button>
  );
};

export default SubmitButton;
