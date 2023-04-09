import React, { useEffect, useState } from 'react'
import UserCard from './userCard'
import axios from "axios";


const UserList = () => {

  const [listOfUsers, setListOfUsers] = useState([]);
  console.log(listOfUsers)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='list-box'>
{
    React.Children.toArray(listOfUsers.map(el=><UserCard user={el}/>))
}
    </div>
  )
}

export default UserList