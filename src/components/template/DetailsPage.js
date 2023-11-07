import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import ItemList from "../module/ItemList";
import Title from "../module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "../module/ShareButton";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-12 h-screen ">
      <div className="md:col-span-9 px-4 sm:px-8 sm:col-span-8">
        <h1 className="font-bold text-xl mt-8 mb-2 text-blue1 ">{title}</h1>
        <span className="text-gray-600 flex gap-1 items-center mb-10">
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <div className="bg-gray-400 ml-2 h-[0.7px] rounded-full w-full mb-4"></div>
        <p>
          {description} لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
          مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
          نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
          را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
          علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <Title>امکانات رفاهی</Title>
        <div className="bg-gray-400 ml-2 h-[0.7px] rounded-full w-full mb-4"></div>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <div className="bg-gray-400 ml-2 h-[0.7px] rounded-full w-full mb-4"></div>
        <ItemList data={rules} />
      </div>

      <div className="order-first sm:order-last md:col-span-3 sm:col-span-4 sm:px-3">
        <div className="flex flex-col items-center my-4 p-2 shadow-3xl shadow-blue1/30 rounded-lg">
          <SiHomebridge className="text-blue1 text-4xl m-3" />
          <p className="font-bold">املاک {realState}</p>
          <span className="flex mt-4 text-gray-500 gap-2 items-center">
            <AiOutlinePhone className="text-lg" />
            {e2p(phone)}
          </span>
        </div>

        <ShareButton />

        <div className="flex text-gray-600 gap-y-2 flex-col items-center my-4 p-3 shadow-3xl shadow-blue1/30 rounded-lg">
          <p className="flex items-center gap-1">
            {icons[category]}
            {categories[category]}
          </p>
          <p className="text-gray-500">{sp(price)} تومان</p>
          <p className="flex gap-1 items-center">
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-ir")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
