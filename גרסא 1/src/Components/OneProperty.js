/* eslint-disable jsx-a11y/alt-text */
import TimeDate from "./TimeDate";
import imgd from "../image/m1 (1).png";
import "./style.css";
const OneProperty=(details)=>{
   
   
    return<>
    <div className="details-apar">
    <img className="img-Apar" src={imgd}/>
    <TimeDate date={new Date(details.Date).toLocaleDateString()}/>
    <p>{details.Price}$</p>
   {details.Floor} room |
    {/* {details.props.size} m"r | */}
    {details.IdStatus}
    <p>{details.City}</p>
    
    
    </div>
    </>
}
export default OneProperty;