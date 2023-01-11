import {Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'AF Store - Home',
            viewport:'width=device-width, initial-scale=1'
        }
    )
}
export function links(){
    return [
    {
        rel:'stylesheet',
        href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
        rel:'preconnect',
        href: 'https://fonts.googleapis.com'
    },
    {
        rel:'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'true'
    },
    {
        rel:'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
        rel:'stylesheet',
        href: styles
    }
    ]

}
export default function App(){
    const [orders,setOrders] = useState([])

    useEffect(() => {
        const readLs = () => {
          const check = JSON.parse(localStorage.getItem('cart')) ?? [];
          setOrders(check);
        };
        readLs();
      }, []);
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(orders));
      }, [orders]);
      
    const clearCart = ()=>{
        setOrders([])}
    const addToCart = (sneakerOrdered) =>{
        if (orders.some(sneakerIter => (sneakerIter.id === sneakerOrdered.id && sneakerIter.size === sneakerOrdered.size))){
            const updatedCart = orders.map((sneakerIter) => {
                if (sneakerIter.id === sneakerOrdered.id && sneakerIter.size === sneakerOrdered.size){
                    sneakerIter.quantity = sneakerOrdered.quantity
                }
                return sneakerIter
            } )
            
            setOrders(updatedCart)
        }else{

            setOrders([...orders,sneakerOrdered])
        }
    }
    return(
        <Document>
            <Outlet
                context={
                    {addToCart,orders,clearCart}
                }
            />
        </Document>
    )
}
function Document({children}){
    return(
        <html lang="en">
            <head>
                <Meta/>   
                <Links/>         
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/** Error handling */
export function CatchBoundary(){
    const error = useCatch()
    return(
        <Document>
            <div className="error">
                <p>{error.status }</p>
                <p>{error.statusText }</p>
                <Link to='/'  className= "error-link">Go back to homepage</Link>
             </div>
        </Document>
    )

}

export function ErrorBoundary({error}){
    return (
        <Document>
           <div className="error">
                <p>{error.status }</p>
                <p>{error.statusText }</p>
                <Link to='/' className= "error-link">Go back to homepage</Link>
            </div>
        </Document>
    )
}