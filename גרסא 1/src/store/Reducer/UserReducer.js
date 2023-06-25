import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
    currentUser: null,
    message: null
}

const UserReducer=(state=initialState,action)=>{
  switch(action.type){
          case TypeAction.SELECTED_USER:
              return{
                ...state,
                arr:state.arr,
                currentUser:action.payload
            }
          case TypeAction.DELETED_USER:
           // console.log("DLETE")
              let arr1 = state.arr.filter((item) => { return item.id !== action.payload })
              //let song = state.selectedSong && state.selectedSong.id === action.idSong ? null : state.selectedSong;
              return {
                  ...state,
                  arr: arr1
              }
          case TypeAction.ADDED_USER:
              return {
                ...state,
                arr: [...state.arr,action.payload] ,
                currentUser:action.payload
              }

              case TypeAction.SAVE_ARR_USER:
              return {
                ...state,
                arr:action.payload
              }
              case TypeAction.SAVE_USER:
              return {
                ...state,
                currentUser:action.payload
              }

              case TypeAction.Exit:
               return {
                ...state,
                arr: [],
                currentUser: null,
                message: null

               }

  }
  return state;

}
export default UserReducer; 