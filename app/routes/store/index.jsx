import { getAllSneakers } from "~/models/sneakers.server"
import { useLoaderData } from "@remix-run/react"
import Sneaker from "~/components/sneaker"
import styles from '~/styles/store.css'

export async function loader(){
  const sneakers = await getAllSneakers()
  return sneakers.data
}
export function meta(){
  return{
    title: 'AF Store',
    description: 'Af Store - Our sneakers collection'
  }
}
export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    },
  ]
}
export default function Store() {
  const sneakers = useLoaderData()
  return (
    <div className="container main-container">
      <h2 className="heading">Our Collection</h2>
      {
        sneakers?.length &&(
          <div className="sneakers-grid">
            {sneakers.map( sneaker => (
              <Sneaker key={sneaker.id} sneaker={sneaker}/>
            ))}
          </div>
          
        )
      }
    </div>
  )
}

