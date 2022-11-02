import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function Room({ user}) {


const userss = useSelector((state) => state.user);
const u = useSelector((state)=> state.room)

console.log(u)



let otherUsers
let otherRooms

 otherRooms= u[0].map((r)=> <li>{r.name}</li>)



if(userss[0])
{
otherUsers = userss[0].filter((u)=> u.id !== user.id).map((a)=> <li>{a.first_name}</li>)

}

console.log(userss[0])
  return (
    <>
    <h1> Welcome {user.first_name} </h1>
    <ol>{otherRooms}</ol>
    <ol>{otherUsers}</ol>
    </>

  )
}

export default Room;