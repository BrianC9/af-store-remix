import React from 'react'

export default function Course({course}) {
    const {title,content,image} = course.attributes
    
  return (
    <section className='course'>
        <style jsx="true">{
            `.course{
                background-image:linear-gradient(to right, rgb(0 0 0 /.8 ),rgb(0 0 0 /.6)), url(${image?.data[0]?.attributes.url})
            }`
        }
    
        </style>
        <div className="container course-grid">
            <div className="content">
                <h2 className='heading'>{title}</h2>
                <p>{content}</p>
                <button>Sign up</button>
            </div>
        </div>
    </section>
  )
}
