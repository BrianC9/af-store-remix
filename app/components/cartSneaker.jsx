import { Link } from "@remix-run/react"
export default function CartSneaker({sneaker}) {
    const {title,quantity,size,image,price,url} =sneaker
    const sizes = [37,40,41,42,43,44,45,46]

  return (
    <section className='sneaker-cart'>
        <Link to={`/store/${url}`}><img src={image} alt={`${title} sneaker`} /></Link>
      <div className="details-order">
        <h3>{title}</h3>
        <div className="size">
        <p>Size:</p> 
        <select 
          value={size}
          onChange={(e)=>console.log(e.target.value)}
        >
          {sizes.map(sizeIt => (<option  key={sizeIt} value={sizeIt}>{sizeIt}</option>))}
        </select>
        </div>
        <div className="quantity">
        <p>Quantity: </p>
        <select 
          className="select-cart"
          value={quantity}
          onChange={(e)=>console.log(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </div>
        <p className='price'>{price} €</p>
        <p className='subtotal'>Subtotal: {`${quantity * price} €`}</p>
       </div>
      </section>
  )
}
