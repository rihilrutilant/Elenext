import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/PageNotFound.css"

const PangNotFound = () => {
  return (
    <>
      <div className="not_found_page">
        <div className="container-fluid">
          <p className="s_header">
            <Link className="home_hover" to="/">Home</Link>&nbsp;&gt; 404 Not Found
          </p>
        </div>
        <img className='n_f_img' src={require("../Images/404.png")} alt="" />
      </div>
    </>
  )
}

export default PangNotFound