import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/karanj7890')
    //     .then(response=>response.json())
    //     .then(data=> setData(data))
    // },[])
  return (
    <div className='text-center text-white bg-gray-500 text-3xl p-4 m-4'> Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubUserInfo= async ()=>{
    const response= await fetch('https://api.github.com/users/karanj7890')
    return response.json()
}

