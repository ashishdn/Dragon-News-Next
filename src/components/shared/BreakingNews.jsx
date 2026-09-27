import React from 'react'
import Marquee from 'react-fast-marquee'

const breakingNews = [
  {
    id: 1,
    title: "Global AI Summit 2026 Launches with Focus on Ethics and Governance"
  },
  {
    id: 2,
    title: "Tech Giants Announce Strategic Partnership for Next-Gen Semiconductor Tech"
  },
  {
    id: 3,
    title: "Global Central Banks Signal Interest Rate Adjustments Amid Economic Shift"
  },
  {
    id: 4,
    title: "NASA Unveils New Deep Space Exploration Mission for 2027"
  },
  {
    id: 5,
    title: "Renewable Energy Capacity Reaches All-Time Record Global High"
  }
];

export default function BreakingNews() {
  return (
    <div className="container mx-auto bg-gray-200 py-4 px-4 flex justify-between gap-4 items-center mx-auto">
        <button className="btn bg-pink-600 text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        {breakingNews.map((news)=>(
          <span key={news.id} className="mr-8 flex items-center">{news.title}</span> 
        ))}</Marquee>
    </div>
  )
}
