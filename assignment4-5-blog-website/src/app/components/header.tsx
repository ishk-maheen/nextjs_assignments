import Link from "next/link"
import Image from "next/image"
import logo from "../data/logo.jpg"
export default function Header(){
    return(
        <div className="header">
            <Image src={logo} 
            alt="Logo" 
            width={65} 
            height={65} />
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="#blogSection">
                    <li>Blog</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/contact-us">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}