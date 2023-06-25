import "../style.css";
import {useForm} from "react-hook-form";
import { useRef } from "react";
import Massage from "./Massage" ;

const createobject=(props)=>{
    // console.log(props.txt+"tttxtt");
   
const obj={
    user:"shialt",
    magssage:props.txt
}
// עכשיו אני רוצה שהאובייקט יתווסף למערך על ידי קריאה לפונקיה של הסטטיט

// eslint-disable-next-line no-lone-blocks
{<Massage props={obj}/>}

 }
const CreateMasseg=()=>{
 const t=useForm();
return<>
<form  className="create-massage" onSubmit={t.handleSubmit(createobject)}>
<input type="text" placeholder="please enter massege" {...t.register("txt") }/>
<input type="submit" value="שלח"/>
</form>
</>
    
   
 }
export default CreateMasseg;