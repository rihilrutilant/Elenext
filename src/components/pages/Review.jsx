import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Review.css"

function Review() {

    const [imgs, setimgs] = useState({ file: [null] })

    let fileObj = [];
    let fileArray = [];

    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        if (fileArray.length < 5) {
            setimgs({ file: fileArray })
            document.querySelector('.uploaded_img').classList.add('updoded_file');
        }
        else {
            alert("You can only upload upto 4 images")
            fileArray = []
            fileObj = []
        }
    }
    return (
        <>
            <div className='review_page'>
                <div className='container-fluid'>
                    <h2>Create Review</h2>
                    <div className='product_detail review_part'>
                        <div className='product_detail_img'>
                            <img src={require("../Images/product_r_img.png")} alt="review product" />
                        </div>
                        <div className='product_detail_cnt'>
                            <p>(Renewed) Dell Dell Intel Core i7 14-inch (35.56 cms) 2-in-1 Touchscreen 1920*1080 Leptop</p>
                        </div>
                    </div>
                    <div className='review_headline review_part'>
                        <h3>Add a Headline</h3>
                        <input type="text" id='R_Headline' placeholder='What’s Most Important To Know?' />
                    </div>
                    <div className='review_uploadpic review_part'>
                        <h3>Add a Photo Or Video</h3>
                        <p>Shoppers Find Image and Videos More Helpful Than Text Alone.</p>
                        <div className='review_u_file'>
                            <div className="review_u_img">
                                {(fileArray || []).map(url => (
                                    <img src={url} alt="..." />
                                ))}
                                <input className="file_pic" id="file" multiple type="file" onChange={uploadMultipleFiles} />
                                <label className="file_lable" htmlFor="file"></label>
                            </div>
                            <div className='uploaded_img'>
                                {
                                    imgs.file.map((images) => {
                                        return <img id="image" key={images} src={images} alt="..." />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='review_comment review_part'>
                        <h3>Add a Writing Review</h3>
                        <textarea name="comment" id="comment" cols="30" rows="10" placeholder='What Did You Like Or Dislike? What Did You Use This Product For?'></textarea>
                    </div>

                    <Link href="#" className='submit_btn'>Submit</Link>
                </div>
            </div>
        </>
    )
}

export default Review