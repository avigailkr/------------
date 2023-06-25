import * as TypeAction from "../ActionTypes";

const initialState = {
    arr: [],
    selectedRoom: null,
    message: null
}

const ChatReducer=(state=initialState,action)=>{
  switch(action.type){
          case TypeAction.SELECTED_ROOM:
              return{
                arr:state.arr,
                selectedRoom:action.payload
            }
          case TypeAction.DELETED_ROOM:
              let arr1 = state.arr.filter((item) => { return item.id !== action.payload })
              return {
                  arr: arr1 ,
                  selectedRoom:state.selectedRoom
              }
          case TypeAction.ADDED_ROOM:
              return {
                arr: [...state.arr,action.payload] ,
                selectedRoom:action.payload
              }

              case TypeAction.SAVE_ARR_ROOM:
              return {
                ...state,
                arr:action.payload
              }

  }
  return state;

}
export default ChatReducer; 