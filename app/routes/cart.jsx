import cartStyles from '~/styles/cart.css'

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
  return (
    <main className='container'>
        <h1 className='heading'>Shopping cart</h1>
        <div className="content">
            <div className="cart">
                <h2>Products</h2>
            </div>
            <aside className='details'>
                <h3>Order details</h3>
                <p>Order total: €</p>
            </aside>
        </div>
    </main>
  )
}
