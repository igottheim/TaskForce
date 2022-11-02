

// export function addUsers(user) {
//   return {
//     type: "users/add",
//     payload: user,
//   };
// }

export function addUsers1() {
  return function (dispatch) {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "users/add", payload: data});
        
      });
  };
}
 
  // Reducer
  const initialState = [];
  
  function usersReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      // sync actions
      case "users/add":
        return [...state, payload];

      default:
        return state;
    }
  }
  
  export default usersReducer;