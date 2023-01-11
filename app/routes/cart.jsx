import cartStyles from '~/styles/cart.css'
import { useOutletContext } from '@remix-run/react'
import CartSneaker from '~/components/cartSneaker'
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
    const [orders] = useOutletContext()
    console.log(orders)
  return (
    <main className='container'>
        <h1 className='heading'>Shopping cart</h1>
        <div className="content">
            <div className="cart">
                <h2>Products</h2>
                {orders.length > 0 ?
                orders.map(sneaker => (

                <CartSneaker key={sneaker.id} sneaker={sneaker}/>
                )):
                <p>There are no sneakers on the cart</p>
                }
            </div>
            <aside className='details'>
                <h2>Order details</h2>
                <p>Order total: €</p>
            </aside>
        </div>
    </main>
  )
}
