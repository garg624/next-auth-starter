"use client"
import React, { useState } from 'react'
import axios from 'axios';


const page = ({ params }: { params: any }) => {
    const [allow,setAllow]=useState(false)
    const decode=decodeURIComponent(params.id);
    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <div className='flex  justify-center  w-screen h-screen mt-10'>
            {/* we only have to allow the user to enter the new password if the token is correct */}
            {allow?
            <div className='flex flex-col justify-center items-center w-screen h-screen mt-10'>
            <h1 className='text-4xl'>Reset your password</h1>
            <form className="card-body md:w-[50%] lg:w-[40%]">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">New Password</span>
                    </label>
                    <input type="password" placeholder="new password" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">Confirm Password</span>
                    </label>
                    <input type="password" placeholder=" confirm password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6 ">
                                <button  className="btn btn-primary">Submit</button>
                            </div>
            </form>
            </div>
            :<div className='text-4xl'>Invalid token or token is expired </div>}
        </div>
    )
}

export default page