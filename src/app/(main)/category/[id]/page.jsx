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
            <LeftSidebar categories={categories} activeId={null} />
          </div>
          <div className="font-bold text-3xl bg-gray-300 col-span-6">
              <h2 className="text-3xl font-bold pb-4"> Login with</h2>
              <div>
                {
                  news.map((n)=>(<p key="n._id">{n.title}</p>))
                }
              </div>
      </div>
          <div className="col-span-3">
           <RightSidebar></RightSidebar>
          </div>
        </div>
  )
}
