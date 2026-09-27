"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navlink({href, children}) {
    const pathname = usePathname();
    const isActive = pathname === href;
  return (
    <div>
      <Link href={href} className={isActive ? "border-b-2 border-b-purple-500 font-semibold" : ""}>
        {children}
      </Link>
    </div>
  )
}
