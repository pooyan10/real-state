import { BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { icons } from "@/constants/icons";

function Card({ data: { _id, category, title, location, price } }) {
  return (
    <div className="border p-5 sm:min-w-[200px] sm:max-w-[250px] w-full sm rounded-md border-blue1/40 ">
      <div className="p-1 bg-blue1/30 rounded-md w-fit m-2">
        {icons[category]}
      </div>
      <p className="pr-2 py-2">{title}</p>
      <p className="pr-2 flex text-gray-500 gap-1 pb-2">
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span className="pr-2">{sp(price)} تومان </span>
      <br />
      <Link
        href={`/buy-residential/${_id}`}
        className="px-2 flex justify-between gap-1 text-blue1 items-center mb-2 mt-4"
      >
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
