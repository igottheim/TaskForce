import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ActionCable from "actioncable";



function Room({ user, cable}) {


const userss = useSelector((state) => state.user);
// const u = useSelector((state)=> state.room)
const [messages, setMessages] = useState([])

 



console.log(cable)


let otherUsers
let otherRooms

//  otherRooms= u[0].map((r)=> <li>{r.name}</li>)



if(userss[0])
{
otherUsers = userss[0].filter((u)=> u.id !== user.id).map((a)=> <li>{a.first_name}</li>)

}

function handleClick(e){
  e.preventDefault();
  console.log(e.target[0].value)

    cable.subscriptions.create
    (
      {
        channel: 'ChatsChannel',
        user_id: 1,
      },
      {
        
        received(data){
console.log("hello")
        }
        
      }
    )
  
}





console.log(messages)



  return (
    <>
    <h1> Welcome {user.first_name} </h1>
    {/* <ol>{otherRooms}</ol> */}
    <ol>{otherUsers}</ol>
  
    <form onSubmit = {handleClick}>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </>

  )
}

export default Room;