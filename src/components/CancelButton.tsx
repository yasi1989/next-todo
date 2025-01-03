import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300 col-start-3"
    >
      キャンセル
    </button>
  );
};

export default CancelButton;
