import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function RightSidebar() {
  return (
    <div>
      <h2 className="text-3xl font-bold pb-4"> Login with</h2>
      <div className="flex flex-col gap-3">
        <button className="btn border-blue-500 text-blue-500"> <FaGoogle></FaGoogle>Login with Google</button>
        <button className="btn"> <FaGithub></FaGithub>Login with Github</button>
      </div>
    </div>
  )
}
