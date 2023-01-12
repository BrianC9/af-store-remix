import { Link, useOutletContext } from "@remix-run/react"
export default function CartSneaker({sneaker}) {
    const {title,quantity,size,image,price,url,id} =sneaker
    const {updateQuantity,deleteFromCart} = useOutletContext()
  return (
    <section className='sneaker-cart'>
        <Link to={`/store/${url}`}><img src={image} alt={`${title} sneaker`} /></Link>
      <div className="details-order">
        <h3>{title}</h3>
        <div className="size">
        <p>Size: {size}</p> 
        </div>
        <div className="quantity">
        <p>Quantity: </p>
        <select 
          className="select-cart"
          value={quantity}
          onChange={(e)=>updateQuantity({
            quantity:+e.target.value,
            id:id
          })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </div>
        <p className='price'>{price} €</p>
        <p className='subtotal'>Subtotal: {`${quantity * price} €`}</p>
        <button
          onClick={(e)=>deleteFromCart(id)}
        >
          Delete Sneaker</button>
       </div>
      </section>
  )
}
