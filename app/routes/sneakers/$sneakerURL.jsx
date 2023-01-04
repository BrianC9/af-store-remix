import { useLoaderData } from "@remix-run/react" 
import { getSneakerByURL } from "~/models/sneakers.server"

 export async function loader({params}){
    const {sneakerURL} = params
    console.log(sneakerURL) 
    const sneaker = await getSneakerByURL(sneakerURL)
    return sneaker.data[0]
 }
export default function Sneaker() {
    
    const sneaker = useLoaderData()
    const {title,description,price,image,url} = sneaker.attributes
    console.log(sneaker);
  return (
    <div>
        <h3>{title}</h3>
        <img src={image.data.attributes.formats.large.url}alt="" />
    </div>

  )
}
