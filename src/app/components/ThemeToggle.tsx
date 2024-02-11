"use client"
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme,setTheme] =useState(true);
  useEffect(()=>{
    if(theme){
      document.querySelector('html')?.setAttribute('data-theme', "dark");
    }
    else{
      document.querySelector('html')?.setAttribute('data-theme', "cupcake");
    }
  },[theme])
  return (
    <div className="form-control">
    <label className="label cursor-pointer flex gap-2">
      <span className="label-text">Themes</span> 
      <input type="checkbox" className="toggle" defaultChecked onChange={(e)=>{setTheme(e.target.checked)}} />
    </label>
  </div>
  )
}

export default ThemeToggle