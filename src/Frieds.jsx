import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
    const [friends,setFriends]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=> setFriends(data))
    },[])

    return(
        <div className='box'>
            <h2>Friend:{friends.length}</h2>
            {
                friends.map(friend => <Friend  friend={friend}></Friend>)
           // friends.map(friend => <Friend friend={friend} />)
        
            }
        </div>
    )
}