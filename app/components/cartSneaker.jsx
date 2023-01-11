import React from 'react'

export default function CartSneaker({sneaker}) {
    const {title,quantity,size,image,price} =sneaker
  return (
    <section className='sneaker-cart'>
      <div>
        <img src={image} alt={`${title} sneaker`} />
      </div>
      <div className="details-order">
      <h3>{title}</h3>
       <p>Size: {size}</p> 
       <p>Quantity: {quantity} </p>
       <p className='price'>{price} €</p>
       <p className='subtotal'>Subtotal: {`${quantity * price} €`}</p>
       </div>
      </section>
  )
}
