import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/BlogDetails.css"

const BlogDetails = () => {
    return (
        <>
            <div className="container-fluid">

                <p className="s_header">
                    <Link to="/">Home</Link>&nbsp;&gt; Blog
                </p>

                <section>
                    <img className='bg_img' src={require("../Images/Blog_1.png")} alt="" />
                </section>

            </div>
        </>
    )
}

export default BlogDetails