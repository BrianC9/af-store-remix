import { useLoaderData } from "@remix-run/react" 
import { Link } from "react-router-dom"
import { getSneakerByURL } from "~/models/sneakers.server"
import styles from '~/styles/store.css'

export async function loader({params}){
    const {sneakerURL} = params
    const sneaker = await getSneakerByURL(sneakerURL)
    if (!sneaker || sneaker.data.length === 0){
      throw new Response('',{
        status:404,
        statusText:'Sneaker not found'
      })
    }
    return sneaker
 }
 export function meta({data}){
  if(!data){
    return{
      title: 'Sneaker not found',
      description: 'Sneakers on sale, model not found'
    }
  }  
  const {title} = data.data[0].attributes
  
 return{
  title: `AF Store - ${title}`,
  description: `Sneaker on sale, model ${title}`
 }
  
 }
export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    }
  ]

}
export default function Sneaker() {
    const sizes = [37,40,41,42,43,44,45,46]
    
    const sneaker = useLoaderData()
    const {title,description,price,image} = sneaker.data[0].attributes
  return (
    <div className="container details-sneaker main-container">
        <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price-product">{price} €</p>
        <div className="select">
        <label htmlFor="size-sneaker">Choose a size</label>
        <select>
          {sizes.map(sizeIt => (<option key={sizeIt} value={sizeIt}>{sizeIt}</option>))}
        </select>
        </div>
        <Link className="linkTo">Add to cart</Link>
        </div>
        <img src={image.data.attributes.url}alt={`Sneaker ${title}`}/>

    </div>

  )
}
