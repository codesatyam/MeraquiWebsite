import React from 'react'
import pic from "../images/Rectangle76.png"
// import R1 from "../images/Rectangle4.png"
// import R2 from "../images/Rectangle7.png"
// import R3 from "../images/Rectangle8.png"
export const Common=(props) => {
  // var [pic1,title,para]=props;
  return (
    <>
     <div className="common d-flex ">
        <div className="left-img">
       <img src={pic} alt="" />
        </div>
        <div className="headed">
            <h4>{props.title}</h4>
            <p>{props.para}</p>
        </div>
     </div>
    </>
  )
}
export default Common;
