import { useLoaderData } from "@remix-run/react"
import { getPostByURL } from "../../models/posts.server"
import styles  from "~/styles/posts.css"
export async function loader({params}){
    const {postURL} = params
    const post = await getPostByURL(postURL)
    if (!post || post.data.length === 0){
        throw new Response('',{
          status:404,
          statusText:'Post not found'
        })
      }
    console.log()
    return post
}
export function links(){
  return [
    { 
      rel: 'stylesheet',
      href: styles
  }
  ]
}
export function meta({data}){
  if(!data){
    return{
      title: 'Post not found',
      description: 'Sneakers on sale, model not found'
    }
  } 
  const {title} = data.data[0].attributes
console.log(title)
  return{
    title: `${title}`,
    description: `AF Blog - ${title}`
  }
  
}
export default function PostURL() {
    const post = useLoaderData()
    const {title, content,publishedAt} = post.data[0].attributes
    const formatedText = (text) =>{
        let resultText = text.split('\n')
       return resultText 
    }
  return (
    <main className="container indPost ">
        <h3 className="heading">{title}</h3>
        <p>{new Date(publishedAt).toLocaleDateString()}</p>
        <div className="content">
        <img className="coverPost" src={post.data[0].attributes.image.data[0].attributes.formats.large.url} alt={`cover for the ${title} post `} />
        <div className="textPost">
        {formatedText(content).map((text,idx)=>(
            <p key={idx}>{text}</p>
        ))}
        </div>
        </div>
    </main>
  )
}
