import React from 'react'
import pc1 from "../images/p1.png";
import pc2 from "../images/p2.png";
export const Publication= (props) => {
  return (
    <>
    <div className="comsocial d-flex  my-2">
    <div className="left-img">
   <img src={pc1} alt="" />
    </div>
    <div className="headed">
        <h4>{props.title}</h4>
        <p>{props.para}</p>
    </div>

 </div>
    </>
  )
}
export default Publication;
