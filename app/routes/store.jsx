import { Outlet, useOutletContext } from "@remix-run/react"
import styles from '~/styles/store.css'


export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    },
  ]
}
export default function Store() {
  return (
    <main className="container main-container">
      <Outlet context={useOutletContext()}/>
    </main>
  )
}

