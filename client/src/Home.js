import Room from "./Room";

function Home({ user, rooms, users}) {


    if (user) {
      return <Room user = {user} rooms = {rooms} users ={users}> </Room>
    } else {
      return <h1 className = "intro">Welcome to RunAround! Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;