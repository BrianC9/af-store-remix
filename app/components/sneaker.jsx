import React from 'react'
import { Link } from 'react-router-dom'

export default function Sneaker({sneaker}) {
    console.log(sneaker.attributes)
    const {title,description,price,image,url} = sneaker.attributes
  return (
    <div className='sneaker'>
        <div className="content">
        <h3 className="sneakerTitle">{title}</h3>
        <Link to={`/${url}`}><img src={image.data.attributes.formats.medium.url} alt={`${title} sneaker`} /></Link>
        <p className='description'>{description}</p>
        <div className="price">{price} €</div>
        <Link to={`/${url}`} className='linkToProduct'>Shop now</Link>
        </div>
    </div>
  )
}
