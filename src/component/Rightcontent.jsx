import React, { useState } from 'react'
import Study from '../Dashboard_Folder/Study'
import Welcome from '../Dashboard_Folder/Welcome'
import Dashboard from '../Dashboard_Folder/Dashboard'
import Add from './Add_Sessions/Add'
import Setting from './Settings/Setting'
import All_Sessions from './All_Session/All_Sessions'

const Rightcontent = ( {theme, toggletheme}) => {
  const [Page, setPage] = useState("Dashboard") //setpage le page lai set garne kaam garxa.
  return (
    <div className={`flex ${theme=== "light" ? "" : "bg-black text-white"}`} >
      <div>
        {/* <Study/>     */}
        <Study set={[setPage, Page]} theme ={theme} /> {//with the help of array we set page.

        }
        <div className='h-screen w-1 bg-blue-50 -mt-185 ml-50'></div>    
      </div>


      <div>        
        <Welcome theme={theme} toggletheme={toggletheme}/>
      <div className='h-0.5 w-327 bg-pink-200 '>        
      </div>
        {Page === "Dashboard" && <Dashboard />}
        {Page === "Add" && <Add />}
        {Page === "All" && <All_Sessions />}
        {Page === "Settings" && <Setting />}     
        {//Logical operator used in react.

        }  
        
        </div>
       
        
          
    </div>
  )
}

export default Rightcontent
