import { useLoaderData } from "@remix-run/react" 
import { useState } from "react"
import { Link } from "react-router-dom"
import { getSneakerByURL } from "~/models/sneakers.server"
import styles from '~/styles/store.css'

export async function loader({params}){
    const {sneakerURL} = params
    console.log(sneakerURL) 
    const sneaker = await getSneakerByURL(sneakerURL)
    return sneaker.data[0]
 }
 export function meta(data){
const {title,description} = data.data.attributes
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
  const [size,setSize] =  useState(0)
    const sizes = [40,41,42,43,44,45,46]
    
    const sneaker = useLoaderData()
    const {title,description,price,image} = sneaker.attributes
  return (
    <div className="container details-sneaker main-container">
        <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price-product">{price} €</p>
        <div className="select">
        <label htmlFor="size-sneaker">Choose a size</label>
        <select>
          {sizes.map(size => (<option key={size} value={size}>{size}</option>))}
        </select>
        </div>
        <Link className="linkToProduct">Add to cart</Link>
        </div>
        <img src={image.data.attributes.url}alt={`Sneaker ${title}`}/>

    </div>

  )
}
