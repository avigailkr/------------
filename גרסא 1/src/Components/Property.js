
import { useState,useEffect,useRef } from "react";
import OneProperty from "./OneProperty";
import "./style.css";
import imgd from "../image/תפריט.png";
import { useNavigate } from "react-router-dom";//אפשרות ניתוב לפי הניתובים שהגדרת

//<i class="fa fa-home"></i> להפוך את דירות בסרגל כלים לאייקון
 const Property=(props)=>{

    const [arr,setArr]=useState([
    {id:1,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"קרקע",date:new Date(8,12,2000),room:3,size:200},
    {id:2,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"קומות",date:new Date(8,12,2000),room:4,size:150},
    {id:3,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"קוטג",date:new Date(8,12,2000),room:2,size:50},
    {id:4,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"וילה",date:new Date(8,12,2000),room:4,size:110},
    {id:5,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"קרקע",date:new Date(8,12,2000),room:5,size:130},
    {id:6,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"דו-פלקס",date:new Date(8,12,2000),room:7,size:70},
    {id:7,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"קרקע",date:new Date(8,12,2000),room:2,size:60},
    {id:8,price:30,img:"צילום מסך 2023-03-05 220537.png",city:"reshon",kind:"בניין",date:new Date(8,12,2000),room:4,size:100}]);
  
    const fun=()=>{
      console.log("chatttttttttttttttttt")
      
      nav("/chat");
      
    }
    const nav=useNavigate();
    // nav("/posts");//מעבר אוטומטי לקומפוננטה שהניתוב מוביל
    return <>
    <p>Apartment</p>
    <img className="option-img" src={imgd}/>
    <div className="all-apartment">
        {arr.map(item=>{return <div className="div-apartment" key={item.id} >
          <OneProperty props={item} />
          <input type="button" className="but-chat" onClick={fun} value="chat"/> 
      </div>} )}
    </div>

    </>
}
export default Property;