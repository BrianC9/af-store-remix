import { Link } from "react-router-dom"
import logo from '../../public/img/logo.svg'
import Navigator from "./navigator"

export default function Header() {
  return (
    <header className="header">
        <div className="container bar">
            <div className="logo">
                <Link to='/'><img src={logo}alt="logo of af store" /></Link>
            </div>
            <Navigator/>
        </div>
    </header>
    )
}
