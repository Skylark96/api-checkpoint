import React from 'react' 
import {  FaRegUser} from 'react-icons/fa'
import {  AiOutlineMail} from 'react-icons/ai'
import {  HiOutlineBuildingOffice2} from 'react-icons/hi2'



const UserCard = ({user}) => {
  return (
    <div className='user-card '>
      <div className="profilr-pic"><FaRegUser size={"100px"}/></div>
        <div className='user-name'>{user.name}</div>
        <div className="info">
          <div className="email"><span><AiOutlineMail/> : {user.email}</span></div>
          <div className='company'><span><HiOutlineBuildingOffice2/> : {user.company.name}</span></div>
        </div>
      
    </div>
  )
}

export default UserCard