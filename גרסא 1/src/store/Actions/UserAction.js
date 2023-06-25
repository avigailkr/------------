import * as TypeAction from "../ActionTypes";
export const SelectedUser = (id) => {
  return {
    type: TypeAction.SELECTED_USER,
    payload: id,
  };
};

export const AddUser = (user) => {
  return {
    type: TypeAction.ADDED_USER,
    payload: user,
  };
};
export const DeleteUser = (id) => {
  return {
    type: TypeAction.DELETED_USER,
    payload: id,
  };
};
export const SaveArrUser = (arr) => {
  return {
    type: TypeAction.SAVE_ARR_USER,
    payload: arr,
  };
};

export const SaveUser = (u) => {
  return {
    type: TypeAction.SAVE_USER,
    payload: u,
  };
};

export const Exite = () => {
  return {
    type: TypeAction.Exit,
  };
};


