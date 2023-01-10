import { Outlet } from "@remix-run/react";
import styles from '~/styles/posts.css'

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

export default function Blog() {
  return (<main className="container">
    <Outlet/>
  </main>
    )
} 

