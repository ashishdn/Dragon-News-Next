import Image from 'next/image'
import Link from 'next/link'
import userAvatar from "../../assets/user.png"
import Navlink from './Navlink.jsx'
export default function Navbar() {
  return (
    <div className="flex justify-between items-center mt-4">
      <div></div>
      <div>
        <ul className="flex justify-between gap-4 text-gray-700 text-semibold">
            <li>
                <Navlink href={"/"}>Home</Navlink>
            </li>
            <li>
                <Navlink href={"/about"}>About</Navlink>
            </li>
            <li>
                <Navlink href={"/career"}>Career</Navlink>
            </li>
            <li>
                <Navlink href={"/contact"}>Contact</Navlink>
            </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Image src={userAvatar} alt="User Avater"></Image>
        <button>
            <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  )
}
