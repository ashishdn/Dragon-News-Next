import React from 'react'
import LeftSidebar from '../../../../components/homepage/news/LeftSidebar';
import RightSidebar from '../../../../components/homepage/news/RightSidebar';


async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
}


async function getNewsByCategoryId(category_id){
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)

  const data = await res.json()
 return data.data
}


export default async function NewsCategoryPage({params}) {
    const {id} =await params;

    const categoriesData = await getCategories();
    const categories = categoriesData.data.news_category;


    const news = await getNewsByCategoryId(id);


  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 py-[60px]">
          <div className="col-span-3 ">
            <LeftSidebar categories={categories} activeId={id} />
          </div>
          <div className=" col-span-6">
              <h2 className="text-3xl font-bold pb-4">All News</h2>
              <div className="flex flex-col gap-3">
                {
                  news.length > 0 ? (news.map((n)=>(<div key="n._id" className= "rounded-md border p-4">{n.title}</div>))) : (<h2 className="text-xl font-semibold">No News Found</h2>)
                }
              </div>
      </div>
          <div className="col-span-3">
           <RightSidebar></RightSidebar>
          </div>
        </div>
  )
}
