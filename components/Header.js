import Link from "next/link"

const lifeStyle = {
    marginRight: 15,

}
const Header = () => {
    return (
        <div>
            <Link href="/">
                <a style={lifeStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={lifeStyle}>About</a>
            </Link>
        </div>
    )

}

export default Header