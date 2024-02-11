"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
const page = ({ params }: { params: any }) => {
    const router = useRouter()
    const decodedEmail = decodeURIComponent(params.id);
    const initial = decodedEmail.split("@")
    const handlelogout = async (e: any) => {
        e.preventDefault();
        try {
            await axios.get("/api/users/logout")
            router.push("/login")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='w-screen h-screen flex justify-center -z-10 mt-10'>
            <div className='flex flex-col items-center  '>

                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src={`https://ui-avatars.com/api/?background=random&name=${initial[0][0]}&rounded=true`} alt="avatar" width={100} height={100} />
                    </div>
                </div>

                <p className=' p-5'>{decodedEmail}</p>
                <button className='btn glass text-xl  flex items-center justify-center' onClick={handlelogout}>Logout</button>
            </div>
        </div>
    )
}

export default page