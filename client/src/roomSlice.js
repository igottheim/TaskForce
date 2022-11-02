
export function addRooms(room) {
  return {
    type: "rooms/add",
    payload: room,
  };
}

 
  // Reducer
  const initialState = [];
  
  function roomsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      // sync actions
      case "rooms/add":
        return [...state, payload];

      default:
        return state;
    }
  }
  
  export default roomsReducer;