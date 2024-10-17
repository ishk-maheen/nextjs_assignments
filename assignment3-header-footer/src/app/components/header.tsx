import Link from "next/link"
export default function Header() {
    return (
        <div>
            <div className="head">
                <ul>
                    <Link href="/">
                        <li>Portfolio</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/contact-us">
                        <li>Contact us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}