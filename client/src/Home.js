import Room from "./Room";

function Home({ user, rooms, users, cable}) {



    if (user) {
      return <Room user = {user} cable = {cable}> </Room>
    } else {
      return <h1 className = "intro">Welcome to RunAround! Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;