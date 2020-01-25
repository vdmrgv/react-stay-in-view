import actions from "./action-types";

export function showOrHide(value) {
  return {
    type: actions.SHOW_OR_HIDE_LOGO,
    payload: value
  };
}
