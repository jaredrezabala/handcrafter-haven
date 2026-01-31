import Link from "next/link";

export default function Nav() {
    const condition = "hola"
    return (
        <div>
            <Link href="/">Home</Link>
            {/* Marketplace is for sellers and customer, to either publish their articulos or seeing them if you're a customers */}
            <Link href="/">Marketplace</Link>
            <Link href="/">{condition ? <h1>condition</h1> : null}</Link>
            <Link href="/">Sign In</Link>
        </div>
    )
}