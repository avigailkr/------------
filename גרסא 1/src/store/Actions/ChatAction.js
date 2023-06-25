import * as TypeAction from "../ActionTypes";
export const selectedRoom = (id) => {
  return {
    type: TypeAction.SELECTED_ROOM,
    payload: id,
  };
};

export const AddRoom = (room) => {
  return {
    type: TypeAction.ADDED_ROOM,
    payload: room,
  };
};
export const DeleteRoom = (id) => {
  return {
    type: TypeAction.DELETED_ROOM,
    payload: id,
  };
};
export const SaveArrRoom = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_ROOM,
    payload: arr,
  };
};


