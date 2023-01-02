import { Link,useLocation } from "react-router-dom"
import logo from '../../public/img/logo.svg'

export default function Header() {
    const location = useLocation()
  return (
    <header className="header">
        <div className="container bar">
            <div className="logo">
                <Link to='/'><img src={logo}alt="logo of af store" /></Link>
            </div>
            <nav className="navegation">
                <Link 
                to="/"
                className={location === '/' ? 'active':''}>Home</Link>
                <Link 
                to="/aboutus"
                className={location === '/aboutus' ? 'active':''}>About us</Link>
                <Link 
                to="/blog"
                className={location === '/blog' ? 'active':''}>Blog</Link>
                <Link 
                to="/store"
                className={location === '/store' ? 'active':''}>Store</Link>
            </nav>
        </div>
    </header>
    )
}
