import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-white border border-black ashadwow text-black px-4 py-3 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
