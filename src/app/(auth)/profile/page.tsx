"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';
// import { getTokenData } from '@/app/helpers/getTokenData';
import Link from 'next/link';


const page = () => {
  const router = useRouter();
  const [data, setData] = useState("profile information");
  const handlelogout = async (e: any) => {
    e.preventDefault();
    try {
      await axios.get("/api/users/logout")
      router.push("/login")
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    axios.get("/api/users/me")
      .then((res) => {
        console.log(res.data)
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className='w-screen h-screen'>
      <h1 className='text-2xl text-blue-500'>
        {data.username}
        </h1>
      <button className='btn glass text-xl  flex items-center justify-center' onClick={handlelogout}>Logout</button>
      <Link className='btn  text-xl flex items-center justify-center' href={`profile/${data._id}`}>Get user info</Link>
      </div>
  )
}

export default page