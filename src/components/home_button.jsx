import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <Link to="/" className="fixed bottom-4 right-4 z-50">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Back to Home
      </button>
    </Link>
  );
};

export default BackToHomeButton;
