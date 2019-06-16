export default function location(state = "darkblue", action) {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  } else {
    return state;
  }
}
