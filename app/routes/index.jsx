import { useLoaderData } from "@remix-run/react"
import { getLastTwoPosts } from "~/models/posts.server"
import { getSneakersOnSale } from "~/models/sneakers.server"

export async function loader(){
  /**
   * When making a multple call to an API, when can use the traditional method:
   * 
   * const sneakers = await getSneakersOnSale()
   * const posts = await getLastTwoPosts()
   * 
   * The problem with this approach is that getLastTwoPosts call will wait until the getSneakersOnSale call has ended. 
   * After that, it will start making the call.
   * This is the way async/await works and it has repercussion in the load times of our app.
   * 
   * The correct way to to this is with Promise.all:
   */
  const [sneakers, posts] = await Promise.all([
    getSneakersOnSale(),
    getLastTwoPosts(),
  ])
  const data = {
    sneakers,posts
  }
  return data
}
export default function Index() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>Index component</div>
  )
}
