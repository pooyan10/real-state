import { cities, services } from "@/constants/strings";
import { FiCircle } from "react-icons/Fi";
import { FaCity } from "react-icons/Fa";
import CategoryCard from "../module/CategoryCard";
function HomePage() {
  return (
    <div className="">
      <div className="mt-24 flex flex-col justify-center items-center gap-6 ">
        <h1 className="text-3xl font-bold text-blue1 ">
          سامانه خرید و اجاره ملک
        </h1>
        <ul className="flex gap-4 ">
          {services.map((i) => (
            <li
              className="flex font-bold items-center gap-1 bg-blue1/10 rounded-md px-2 py-1 text-blue1"
              key={i}
            >
              <FiCircle />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 justify-center items-center flex-col gap-5 sm:flex sm:flex-row mt-24">
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان " name="apartment" />
        <CategoryCard title="مغازه " name="store" />
        <CategoryCard title="دفتر " name="office" />
      </div>
      <div className="flex flex-col items-center mt-24">
        <h1 className="text-3xl font-bold text-blue1">شهر های پر بازدید</h1>
        <ul className="flex justify-center flex-wrap gap-8 mt-10 ">
          {cities.map((i) => (
            <li
              className="flex items-center gap-3 justify-center bg-blue1/10 text-blue1 px-8 font-bold py-1 rounded-md"
              key={i}
            >
              <FaCity />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
