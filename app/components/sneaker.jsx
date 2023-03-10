import { Link } from 'react-router-dom'

export default function Sneaker({sneaker}) {
    const {title,description,price,image,url} = sneaker.attributes
  return (
    <div className='sneaker'>
        <div className="content">
        <h3 className="sneakerTitle">{title}</h3>
        <Link to={`/store/${url}`}><img src={image.data.attributes.formats.medium.url} alt={`${title} sneaker`} /></Link>
        <p className='description '>{description}</p>
        <div className="price-product ">{price} €</div>
        <Link to={`/store/${url}`} className='linkTo'>Shop now</Link>
        </div>
    </div>
  )
}
