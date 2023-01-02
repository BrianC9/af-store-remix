import { Link } from "react-router-dom"
import logo from '../../public/img/logo.svg'

export default function Header() {
  return (
    <header className="header">
        <div className="container bar">
            <div className="logo">
                <Link><img src={logo}alt="logo of af store" /></Link>
            </div>
            <nav className="navegation">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/store">Store</Link>
            </nav>
        </div>
    </header>
    )
}
