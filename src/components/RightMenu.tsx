import React from 'react'
import FriendRequest from './FriendRequest'
import Birthday from './Birthday'
import Ad from './Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

type Props = {
 
}

const RightMenu = ({userId}: {userId?: string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <UserInfoCard userId = {userId}/>
          <UserMediaCard userId = {userId}/>
        </>
      ): null}
      <FriendRequest/>
      <Birthday/>
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu