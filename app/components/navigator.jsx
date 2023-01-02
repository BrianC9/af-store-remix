import { Link,useLocation } from "react-router-dom"
export default function Navigator() {
  const location = useLocation()

  return (
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
  )
}
