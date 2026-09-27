import Link from "next/link";

export default function LeftSidebar({ categories, activeId }) {
  return (
    <div>
      <h2 className="text-3xl font-bold pb-4"> All Categories</h2>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`${activeId === category.category_id && "bg-[#E7E7E7]"}  px-4 py-2 text-[18px] rounded
                   `}
          >
            <Link href={`/category/${category.category_id}`}  className="block">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
