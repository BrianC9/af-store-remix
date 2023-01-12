import { Link, useLoaderData, useOutletContext } from "@remix-run/react" 
import { useState } from "react"
import { getSneakerByURL } from "~/models/sneakers.server"
import successIcon from '../../../public/img/success.svg'
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
  const [orderDetails,setOrderDetails] = useState({
    quantity:0,
    size:0
  })
  const [alertVisible, setAlertVisible] = useState(false)
  const {addToCart} = useOutletContext()
  const sneaker = useLoaderData()
  const sizes = [37,40,41,42,43,44,45,46]
  const {title,description,price,image,url} = sneaker.data[0].attributes
  const handleChange = (e) =>{
   const{id,value} =e.target    
    setOrderDetails({...orderDetails,[id]:+value})
  }

  const handleAlertVisiblity = ()=>{
    setAlertVisible(true)
    setTimeout(() => {
      setAlertVisible(false);
 }, 3000);

  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const orderSelected = {
      id:`${sneaker.data[0].id}${orderDetails.size}`,
      title,
      image:image.data.attributes.url,
      price,
      quantity:orderDetails.quantity,
      size:orderDetails.size,
      url
    }
    if(addToCart(orderSelected)){
      handleAlertVisiblity()
     
    }
    setOrderDetails({
      quantity:0,
      size:0
    })
    

  }
    
    
  return (
    <div className="container main-container ind-sneaker">
        <div className="content">
          <img src={image.data.attributes.url}alt={`Sneaker ${title}`}/>
          <div className="details-sneaker">
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <p className="price-product">{price} €</p>
            <form onSubmit={handleSubmit} className="cart-form">
              <div className="select">
                <label htmlFor="size-sneaker">Choose a size</label>
                <select 
                  required={true}
                  id='size'
                  value={orderDetails.size}
                  onChange={handleChange}
                >
                  <option value="">Size</option>

                  {sizes.map(sizeIt => (<option  key={sizeIt} value={sizeIt}>{sizeIt}</option>))}
                </select>
              </div>
              <div className="quantity">
                <label htmlFor="quantity">Quantity</label>
                <select 
                  onChange={handleChange}
                  value={orderDetails.quantity}
                  required={true}
                  id='quantity'
                >
                  <option value="">Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              {alertVisible && (
                <div className="alert-added ">
                
                  <img src={successIcon} alt="icon success on green" />
                  <div className="text">
                  <p>Added to the cart</p>
                  <Link to={'/cart'}>Go to checkout</Link>
                </div>
              </div>
              )}
              <input type="submit" value="Add to cart" />
            </form>
            
          </div>
        </div>
        

    </div>

  )
}
