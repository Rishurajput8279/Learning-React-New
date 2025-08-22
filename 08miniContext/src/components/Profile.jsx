import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return (
      <div className="text-center text-gray-600 mt-6 text-lg">
        Please Login
      </div>
    )
  }

  return (
    <div className="text-center text-green-600 font-semibold mt-6 text-xl">
      Welcome {user.username} 🎉
    </div>
  )
}

export default Profile
