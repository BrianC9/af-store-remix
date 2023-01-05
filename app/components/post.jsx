
export default function Post({post}) {
    const {title,updatedAt,content}=post.attributes
    console.log(post.attributes);
    const calculateReadingTime = (text) =>{
        let totalTime = text.split(' ').length /200
        return totalTime
    }
  return (
    
    <main className="container post">
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{new Date(updatedAt).toLocaleDateString()}</p>
            <p className="time-read">{`${calculateReadingTime(content)} min reading time`}</p>
        </div>
        <img className="img-post" src={post.attributes.image.data[0].attributes.formats.medium.url} alt={`Cover for the post titled ${title}`}/>
    </main>
  )
}
