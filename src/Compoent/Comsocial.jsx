import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import pic from "../images/Rectangle8.png"
export const Comsocial = (props) => {
  return (
    <div className="comsocial d-flex  my-2">
    <div className="left-img">
   <img src={pic} alt="" />
    </div>
    <div className="headed">
        <h4>{props.title}</h4>
        <p>{props.para}</p>
        <a href="/"><FaLinkedin
                      size={30}
                      style={{ color: "#1ABDDC", marginTop: "0rem" }}
                    /></a>
    </div>

 </div>
  )
}
