import React from 'react'
import { getNewsById } from '../../../../lib/data';

export default async function NewsDetailsPage({params}) {
  const {id} = await params;
  console.log(id)

  const newsId = await getNewsById(id)
  console.log(newsId.title)
  return (
    <div>
      <h3>{newsId.title}</h3>
    </div>
  )
}
