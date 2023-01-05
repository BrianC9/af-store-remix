import { Link } from "@remix-run/react";

export default function Post({post}) {
    const {title,publishedAt,content,url}=post.attributes
    console.log(post.attributes);
    
  return (
    
    <main className="container post">
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{new Date(publishedAt).toLocaleDateString()}</p>
            <p className="summaryPost">{content}</p>
            <img className="img-post" src={post.attributes.image.data[0].attributes.formats.medium.url} alt={`Cover for the post titled ${title}`}/>
            <Link className="linkTo" to={`/blog/${url}`}>Read post</Link>

        </div>
        
    </main>
  )
}
