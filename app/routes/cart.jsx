import cartStyles from '~/styles/cart.css'
import { useOutletContext,Link } from '@remix-run/react'
import CartSneaker from '~/components/cartSneaker'
import { useEffect, useState } from 'react'
import {ClientOnly} from 'remix-utils'
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: cartStyles
        }
    ]
}
export function meta(){
    return{
        title: 'AFStore - Cart',
        description: 'Order summary page'
    }
}
export default function Cart() {
    const [total, setTotal] = useState(0)
    const {orders,clearCart} = useOutletContext()
    
    useEffect(()=>{
        const totalCalculated = orders.reduce((totalAc, sneakerIter)=> totalAc + (sneakerIter.quantity * sneakerIter.price), 0)
        setTotal(totalCalculated)
        },[orders])

  return (
    <ClientOnly fallback={'Loading cart...'}>{()=>(
    <main className='container'>
        <h1 className='heading'>Shopping cart</h1>
        <div className="content">
            <div className="cart">
                <h2>Products</h2>
                {orders?.length === 0  ? 
                <>
                <p>There are no sneakers on the cart</p>
                <Link to={'/store'}>Go to store</Link>
                </>
                :
                orders?.map(sneaker => (
                    <CartSneaker key={`${sneaker.id}+${Math.floor(Math.random()*1_000_000)}`} sneaker={sneaker}/>
                    ))
                }
                {orders?.length > 0 &&   <button onClick={()=>{clearCart()}}>Clear cart</button>}

            </div>
            
            <aside className='details'>
                <h2>Order details</h2>
                <p>Order total: {total} €</p>
            </aside>
        </div>
    </main>
    )}</ClientOnly>
  )
}
