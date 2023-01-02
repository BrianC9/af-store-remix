import headingImg from '../../public/img/aboutus.jpg'
import styles from '~/styles/aboutus.css'

export function meta(){
  return{
    title: 'About Us'
  }
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: headingImg,
      as: 'image'
    }
  ]
}

export default function AboutUs() {
  return (
    <main className="container aboutus">
      <h2 className="heading">About us</h2>
      <div className="content">
        <img src={headingImg} alt="Header" />
        <div>
          <p>Pellentesque vitae urna sed sem porta ornare eget vitae risus. Vestibulum at ornare neque. Morbi cursus imperdiet metus nec laoreet. Proin felis mi, porta sollicitudin magna in, laoreet tristique massa. Proin faucibus sagittis egestas. Vivamus non gravida turpis. Aenean suscipit libero ut tincidunt fermentum. Morbi blandit maximus orci, nec congue felis varius vestibulum. Integer tincidunt congue semper.</p>
          <p>Pellentesque vitae urna sed sem porta ornare eget vitae risus. Vestibulum at ornare neque. Morbi cursus imperdiet metus nec laoreet. Proin felis mi, porta sollicitudin magna in, laoreet tristique massa. Proin faucibus sagittis egestas. Vivamus non gravida turpis. Aenean suscipit libero ut tincidunt fermentum. Morbi blandit maximus orci, nec congue felis varius vestibulum. Integer tincidunt congue semper.</p>
        </div>
      </div>
    </main>
  )
}