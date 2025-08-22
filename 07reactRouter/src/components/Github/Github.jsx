import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setdata] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Rishurajput8279')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img className='w-300px' src={data.avatar_url} alt="GitPic" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const res=await fetch("https://api.github.com/users/Rishurajput8279")
  return res.json();
}