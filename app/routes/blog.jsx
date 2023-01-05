import { useLoaderData } from "@remix-run/react";
import Post from "~/components/post";
import { getAllPosts } from "~/models/posts.server"
import styles from '~/styles/posts.css'
export async function loader(){
  const posts = await getAllPosts()
  return posts;
}
export default function Blog() {
  const posts = useLoaderData()
  return (
    <main className="container ">
      <h2 className="heading">AF Blog</h2>
      <div className="blog">
        {
          posts.data.map(post=>(
            <Post key={post.id} post={post}/>
          ))
        }
      </div>
    </main>
    )
}
export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}
export function meta(){
  return{
    title: 'Blog',
    description: "A collection of posts for sneakers hunters and passionate people about sneaker culture."
  }
}