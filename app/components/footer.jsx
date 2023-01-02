import Disclaimer from "./disclaimer";
import Navigator from "./navigator";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container content">
        <Navigator/>
        <Disclaimer/>
        </div>
    </footer>
  )
}
