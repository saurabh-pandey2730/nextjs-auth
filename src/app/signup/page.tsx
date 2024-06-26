"use client"

import Link from "next/link"
import React from "react"
import {axios} from "axios"
import { useRouter } from "next/navigation"

export default function SignUpPage(){
    const [user,setuser]=React.useState({
        email:"",
        password:"",
        username:""
    })
    const onSignup = async()=>{}
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input type="text"  id="username" value={user.username} placeholder="username"
            onChange={(e)=>setuser({...user , username:e.target.value})}
          className="p-2 border border-gray-300 rounded-lg mb-4 "  />

            <label htmlFor="email">Email</label>
            <input type="text"  id="email" value={user.email} placeholder="email"
            onChange={(e)=>setuser({...user , email:e.target.value})}
          className="p-2 border border-gray-300 rounded-lg mb-4"  />

            <label htmlFor="username">Password</label>
            <input type="text"  id="password" value={user.password} placeholder="password"
            onChange={(e)=>setuser({...user , password:e.target.value})}
          className="p-2 border border-gray-300 rounded-lg  mb-4"  />
          <button  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 mb-4 "
             onClick={onSignup}>
            signUp Here
          </button>
          <Link href='/login'>visit login page</Link>
        </div>
    )
}