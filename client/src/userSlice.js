

export function addUsers(user) {
  return {
    type: "users/add",
    payload: user,
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