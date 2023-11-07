import Link from "next/link";
import { HiFilter } from "react-icons/hi";

function Sidebar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "اداره" },
  ];

  return (
    <div className="flex flex-col sm:w-fit items-center mb-10 shadow-3xl shadow-blue1/30 rounded-md p-8">
      <p className="font-bold text-lg flex items-center text-blue1 mb-3">
        <HiFilter /> دسته بندی
      </p>
      <div className="space-x-5 sm:space-y-2 mt-2 flex flex-wrap sm:flex-col">
        <Link
          href="/buy-residential"
          className="font-bold ml-5 hover:scale-125 hover:text-blue1"
        >
          همه
        </Link>
        {queries.map((query, index) => (
          <Link
            key={index}
            href={{
              pathname: "/buy-residential",
              query: { category: Object.keys(query) },
            }}
            className="font-bold hover:scale-125 hover:text-blue1"
          >
            {Object.values(query)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
