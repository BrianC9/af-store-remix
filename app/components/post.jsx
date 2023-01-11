import { Link } from "@remix-run/react";

export default function Post({post}) {
    const {title,publishedAt,content,url}=post.attributes
    const calculateTimeReading = (text)=>{
      return Math.ceil(text.split(' ').length / 200)
    }
  return (
    
    <main className="container post">
        <div className="content">
            <h3>{title}</h3>
            <div className="details">
            <p className="date">{new Date(publishedAt).toLocaleDateString()}</p>
            <p title="Calculated by the 200 words average rule" className="time">~ {calculateTimeReading(content)} min read</p>
            </div>
            <p className="summaryPost">{content}</p>
            <Link  to={`/blog/${url}`}><img className="img-post" src={post?.attributes.image.data[0].attributes.formats.large.url} alt={`Cover for the post titled ${title}`}/></Link>
            <Link className="linkTo" to={`/blog/${url}`}>Read post</Link>

        </div>
        
    </main>
  )
}
