import axios from 'axios';//ספרייה שיש בה פונקציות לשליפה מהשרת
//users
//כל המשתמשים
export const bringAllUsersFromServer=()=>{
    return axios.get("http://localhost:8080/user/getAllUsers");
}
//מחיקת משתמש
export const DeleteUserFromServer=(id)=>{
    console.log("DeleteFromServer")
    return axios.delete(`http://localhost:8080/user/deleteUser/${id}`);
}
//הוספת משתמש
export const AddUserToServer=(newuser)=>{
    return axios.post("http://localhost:8080/user/addUser",newuser);
}
//התחברות
export const Login=(user)=>{
    return axios.post("http://localhost:8080/user/login",user);
}


//apartment
//כל הדירות
export const bringAllPropertysFromServer=()=>{
    return axios.get("http://localhost:8080/property/getAllPropertys");
}
//דירה על פי מזהה מסויים
// export const getByIdUserFromServer=(id)=>{
//     return axios.get(`http://localhost:8080/apartment/getAllApartmentsByUserId/${id}`);
// }


//chat 
export const bringChatByRoomIdFromServer=(id)=>{
    return axios.get(`http://localhost:8080/chat/getAllChatByRoomId/${id}`);
}
