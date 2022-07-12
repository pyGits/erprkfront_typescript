import {
  SHOW_LOADING,
  HIDE_LOADING,
  MODE_INSERT,
  MODE_EDIT,
  SHOW_TOAST,
} from "../Actions/actionTypes";

const initialState = {
  loading: true,
  mode: MODE_INSERT,
  toast: { status: "HIDE", payload: { type: "success", title: "", text: "" } },
};

type Action = {
  type: string;
  payload?: any;
};

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    case MODE_EDIT:
      return { ...state, mode: MODE_EDIT };
    case MODE_INSERT:
      return { ...state, mode: MODE_INSERT };
    case SHOW_TOAST:
      return { ...state, toast: action.payload };
    default:
      return state;
  }
}
