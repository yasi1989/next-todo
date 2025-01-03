import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DeleteButtonProps = {
  pending: boolean;
  className?: string;
};

const DeleteButton = ({ pending, className = "" }: DeleteButtonProps) => {
  return (
    <button disabled={pending} className={className}>
      <FontAwesomeIcon icon={faDeleteLeft} />
    </button>
  );
};

export default DeleteButton;
