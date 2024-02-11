"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from "axios"
import { useRouter } from 'next/navigation'
const page = () => {
    const router=useRouter()
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [btn,setBtn]=useState({
        isLoading:false,
        btnDisabled:true
    })
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        try {
            setBtn({...btn,isLoading:true})
            console.log(data)
            const response=await axios.post("/api/users/login",data);
            console.log(response)
            console.log("Login successfully")
            router.push(`/profile/${data.email}`)
        } catch (error) {
            console.log(error)
        }finally{
            setBtn({...btn,isLoading:false})

        }
    }
    useEffect(() => {
        if(data.email.length > 0 && data.password.length>4) {
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
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" onChange={(e) => { setData({ ...data, email: e.target.value }) }} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" onChange={(e) => { setData({ ...data, password: e.target.value }) }} required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <Link href="/signup" className="label-text-alt link link-hover">New user Register here</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={btn.btnDisabled} className="btn btn-primary" onClick={handleSubmit}>{!btn.isLoading ? "Login":<span className="loading loading-bars loading-lg"></span>}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page