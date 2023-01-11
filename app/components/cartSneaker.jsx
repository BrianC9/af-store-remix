import React from 'react'

export default function CartSneaker({sneaker}) {
    const {title,quantity,size} =sneaker
  return (
    <div>{title} - {size} - {quantity} </div>
  )
}
