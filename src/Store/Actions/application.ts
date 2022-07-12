import {
  SHOW_LOADING,
  HIDE_LOADING,
  MODE_EDIT,
  MODE_INSERT,
  SHOW_TOAST,
} from "./actionTypes";

export const modeEdit = () => {
  return {
    type: MODE_EDIT,
  };
};
export const modeInsert = () => {
  return {
    type: MODE_INSERT,
  };
};
export const showLoader = () => {
  return {
    type: SHOW_LOADING,
  };
};
export const hideLoader = () => {
  return {
    type: HIDE_LOADING,
  };
};

export const showToast = (payload: any) => {
  return {
    payload: payload,
    type: SHOW_TOAST,
  };
};
