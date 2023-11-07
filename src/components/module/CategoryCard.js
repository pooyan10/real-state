import Image from "next/image";
import Link from "next/link";

function CategoryCard({ name, title }) {
  return (
    <div className="p-2 mx-auto w-fit rounded-lg text-center shadow-3xl shadow-blue1/40 hover:animate-wiggle animate-duration-500 ">
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          className="rounded-lg "
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p className="mt-2 py-2 text-blue1 font-bold">{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
