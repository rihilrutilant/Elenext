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

                <section className='blog_details'>
                    <img className='bg_img1' src={require("../Images/Blog_1.png")} alt="blog_image" />
                    <img className='bg_img2' src={require("../Images/Blog_2.png")} alt="blog_image" />
                    <div className="bg_details">
                        <span>By <strong>John Doe</strong>- 03. 10. 2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa-regular fa-comment-dots"></i> &nbsp;&nbsp;<strong>73</strong> Comment</span>
                    </div>
                    <div className="bg_header">
                        Lampeserien CACHÉ vokser med tre nye modeller!
                    </div>
                    <p className='bd_body'>
                        Sa er de nye CACHE modeller landet i butikkerne. Der er tale om en lille fin pendel i størrelse x-small, en ny elegant bordlampe og en stor markant pendel komplementerer kollektionen, der var LE KLINTS hovednyhed i 2014.
                    </p>
                    <p className='bd_body'>
                        Du kan læse meget mere om nyhederne nedenfor, eller besøg en af vore mange forhandlere. Find din lokale forhandler her.
                    </p>
                    <p className='bd_body'>
                        CACHÉ serien består herefter af fem pendler, en bordlampe og en gulvlampe. Alle lamper udført i et stilrent og moderne design forarbejdet i høj håndværksmæssig kvalitet hvor alle dele er produceret i Danmark. Lamperne leveres i sort eller grå lakering kombineret med fine messingdetaljer.
                    </p>

                    <div className="bg_sub_img">
                        <img className='bg_s_img' src={require("../Images/b_d_1.png")} alt="blog_image1" />
                        <img className='bg_s_img' src={require("../Images/b_d_2.png")} alt="blog_image2" />
                        <img className='bg_s_img' src={require("../Images/b_d_3.png")} alt="blog_image3" />
                    </div>
                    <div className="bg_header">
                        Unik kombination af foldehåndvaerk og design
                    </div>
                    <p className='bd_body'>
                        Den plisserede lampeskærm giver lampen en særlig karakter og tilfører LE KLINTs klassiske DNA som ligger i det unikke foldehåndværk.
                    </p>
                    <p className='bd_body'>
                        CACHÉ som på fransk betyder skjult er netop symbolikken for den næsten skjulte håndfoldede skærm, der på smukkeste vis er integreret i lampen, og som giver den helt særlige karakter der er forbundet med en klassisk LE KLINT lampe.
                    </p>
                    <p className='bd_body'>
                        CACHÉ er designet af den herboende franske designer Aurélien Barbry, som for år tilbage startede sin karriere med at arbejde for den berømte franske arkitekt Jean Nouvel. Han debuterede som designer for LE KLINT i 2012 med den håndfoldede pendel La Cloche, der tillige blev nomineret til "Årets Lampe".
                    </p>
                </section>

            </div>
        </>
    )
}

export default BlogDetails