import { useLoaderData } from "@remix-run/react"
import Sneaker from "~/components/sneaker"
import { getCourse } from "~/models/course.server"
import { getLastTwoPosts } from "~/models/posts.server"
import { getSneakersOnSale } from "~/models/sneakers.server"
import styles from '~/styles/home.css'
import stylesStore from '~/styles/store.css'
import stylePosts from '~/styles/posts.css'
import Course from '~/components/course'
import Post from "~/components/post"
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
  const [sneakers, posts,course] = await Promise.all([
    getSneakersOnSale(),
    getLastTwoPosts(),
    getCourse()
  ])
  const data = {
    sneakers,
    posts,
    course
  }
  return data
}
export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel:'stylesheet',
      href:stylesStore
    },
    {
      rel:'stylesheet',
      href:stylePosts
    }
  ]
}
export default function Index() {
  const data = useLoaderData()
  return (
    <>
      <section className="container sneakers-sale">
        <h2 className="heading">Sneakers on sale</h2>
        <div className="sneakers-grid">
        {data.sneakers?.data.map(sneaker => (
          <Sneaker className="sneaker-home" key={sneaker.id} sneaker={sneaker}/>
        ))}
        </div>
      </section>
      <Course course = {data.course.data} />
      <section className="container latests-posts">
        <h2 className="heading">Latests posts</h2>
        <div className="posts-grid">
          {data.posts?.data.map(post => (
          <Post className="posts-home" key={post.id} post={post}/>
          ))}
        </div>
      </section>
    </>
  )
}
