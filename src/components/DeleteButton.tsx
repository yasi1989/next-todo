import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormStatus } from "react-dom";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      <FontAwesomeIcon icon={faDeleteLeft} />
    </button>
  );
};

export default DeleteButton;
