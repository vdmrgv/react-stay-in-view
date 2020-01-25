const initialState = {
  isShowed: true
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_OR_HIDE_LOGO":
      return {
        ...state,
        isShowed: !state.isShowed
      };

    default:
      return state;
  }
}

export default rootReducer;
