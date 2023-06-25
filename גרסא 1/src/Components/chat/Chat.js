import Message from "./Massage";
import CreateMasseg from "./CreateMasseg";
import { useState,useEffect,useRef } from "react";
import "../style.css";
import { bringChatByRoomIdFromServer } from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import { SaveUser } from "../../store/Actions/UserAction";
import { SaveArrRoom } from "../../store/Actions/ChatAction";

const Chat=()=>{
//console.log("arrrrrrive")
    const massUser=useState([
        {user:"shilat",magssage:"helloo  wourld"},
        {user:"avi",magssage:" retry"},
        {user:"shilat",magssage:"yaaaa"},
        {user:"shira",magssage:"nooo i want"},
        {user:"shilat",magssage:"i am beutifull"},
        {user:"shilat",magssage:"helloo  wourld"},
        {user:"avi",magssage:" retry"},
        {user:"shilat",magssage:"yaaaa"},
        {user:"shira",magssage:"nooo i want"},
        {user:"shilat",magssage:"i am beutifull"},
        {user:"avi",magssage:" retry"},
        {user:"shilat",magssage:"yaaaa"},
        {user:"shira",magssage:"nooo i want"},
        {user:"shilat",magssage:"i am beutifull"}
     ]);
// const dis=useDispatch()
// //בינתיים שמה יוזר בבשם אביגיל ללא אובייקט
// dis(SaveUser("avigail"))
// //שולפת מהסטייט את היוזר ששמתי
// const user=useSelector(st=>st.user.currentUser);
// //console.log(user)

//מביאה מהשרת את כל השיחות של חדר מספר 1
// bringChatByRoomIdFromServer(1).then(res=>{
//    //console.log(res.data)
//    dis(SaveArrRoom(res.data))
//     }).catch(err=>alert("error, bring room Not Doen From Server fallt!!"))

// שולפת את המערך של השיחות מהסטייט המקומי ושמה במשתנה
// const arrChat=useSelector(arr=>arr.chat.arr)
//console.log(arrChat+"arrrrrrrrr")

// const nameFriend=user;
return<><div className="root-chat">
 <div className="chat"> 
 <p className="litel">chat with {"avigail"}</p>
<Message massagesIs={"arrChat"}/>
<CreateMasseg/>
</div>
</div>
</>
}
export default Chat;