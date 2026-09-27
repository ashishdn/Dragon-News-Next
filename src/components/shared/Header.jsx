import React from 'react'
import logo from "../../assets/logo.png"
import Image from "next/image"
import { format } from 'date-fns'

export default function Header() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center py-8 px-4 w-full mx-auto">

     
      <div className="w-64 md:w-80 lg:w-96 h-auto mb-4">
        <Image src={logo} alt="The Dragon News"/>
      </div> 
     
      {/* 2. Subtitle */}
      <p className="text-[#706F6F] text-sm md:text-base lg:text-lg mb-1 font-normal">
        Journalism Without Fear or Favour
      </p>

      {/* 3. Date */}
      <p className="text-[#403F3F] font-normal text-sm md:text-base lg:text-lg">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}

      </p>
      
    </div>
    </div>
  )
}
