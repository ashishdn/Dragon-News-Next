import React from 'react'

export default async function NewsCategoryPage({params}) {
    const paramsres =await params;
    console.log(paramsres)
  return (
    <div>
      <h2>News by category</h2>
    </div>
  )
}
