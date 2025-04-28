import { useEffect, useState } from "react"

export default function Users(){
  const [users,setUsers]=useState([])
//   useEffect ar modde (callbackFunction,Dependency)
///const calbackfun=()=>{}
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>setUsers(data));
  },[])
    return(
        <div>
            <h3>User length:{users.length}</h3>
        </div>
    )
}
// 
// declare a state to hold the data\
//2.UseEffect with call back and dependency
//  