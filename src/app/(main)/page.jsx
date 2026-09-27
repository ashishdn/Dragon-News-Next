import React from "react";
import LeftSidebar from "../../components/homepage/news/LeftSidebar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const categoriesData = await getCategories();
  const categories = categoriesData.data.news_category;
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 py-[60px]">
      <div className="col-span-3 ">
        <LeftSidebar categories={categories} activeId={null} />
      </div>
      <div className="font-bold text-3xl bg-gray-300 col-span-6">Blog Post</div>
      <div className="font-bold text-3xl bg-purple-300 col-span-3">
        Social Media
      </div>
    </div>
  );
}
