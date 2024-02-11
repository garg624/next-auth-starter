"use client"
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: "",
        username:"",
    })
    const [btn,setBtn]=useState({
        isLoading:false,
        btnDisabled:true
    })
    const handleSubmit =async (e:any) => {
        e.preventDefault();
        try {
            setBtn({...btn, btnDisabled:true})
            setBtn({...btn, isLoading:true})

            const response = await axios.post("/api/users/signup", data);
            console.log(response.data)
            console.log("Sign up successfully")
            router.push('/login')
        } catch (error) {
            console.log(error)
        }finally{
            setBtn({...btn, isLoading:false})
            setBtn({...btn, btnDisabled:false})
        }
    }
    useEffect(() => {
        if(data.email.length > 0 && data.password.length>4 && data.username.length > 0) {
            setBtn({...btn, btnDisabled:false})
        }
        else{
            setBtn({...btn, btnDisabled:true})
        }
    },[data]);
    return (
        <div className='h-screen w-screen'>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-1/3 lg:p-6 w-full p-2">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="test" placeholder="Username" className="input input-bordered" onChange={(e)=>{setData({...data,username:e.target.value})}}   required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" onChange={(e)=>{setData({...data,email:e.target.value})}} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" onChange={(e)=>{setData({...data,password:e.target.value})}} required />
                                <label className="label">
                                    <Link href="/login" className="label-text-alt link link-hover">Already an user</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={btn.btnDisabled} className="btn btn-primary" onClick={handleSubmit}>{!btn.isLoading ? "Sign up":<span className="loading loading-bars loading-lg"></span>}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page