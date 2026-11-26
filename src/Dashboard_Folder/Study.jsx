import React from 'react'
import Add from '../component/Add_Sessions/Add'

const Study = ({set:[setPage, Page], theme}) => {   //Object decostructior 
  return (
    <div className='h-screen w-50  p-3 '>
      <div>
        <h1 className='text-2xl font-bold'>StudyFlow</h1>
        <div className='pt-3 flex flex-col gap-3  '>
            <div onClick={()=>setPage("Dashboard")} className={`pl-3 cursor-pointer   rounded-2xl ${Page === 'Dashboard' ? "bg-black text-white" : "hover:bg-black hover:text-white"}  `}  
            >            
              <i className="ri-dashboard-line"></i>Dashboard </div> {//Used of ternary operator
             }

            <div onClick={() => setPage("Add")} className={`pl-3 cursor-pointer   rounded-2xl ${Page === 'Add' ? "bg-black text-white" : "hover:bg-black hover:text-white"}  `}          
             
            ><i className="ri-add-circle-line"></i> Add Session  </div>

            <div onClick={() => setPage("All")} className={`pl-3 cursor-pointer   rounded-2xl ${Page === 'All' ? "bg-black text-white" : "hover:bg-black hover:text-white"}  `}
            
            ><i className="ri-menu-line"></i> All Sessions </div>
            <div onClick={()=>setPage("Settings")} className={`pl-3 cursor-pointer   rounded-2xl ${Page === 'Settings' ? "bg-black text-white" : "hover:bg-black hover:text-white"}  `}
            
            ><i className="ri-settings-2-line"></i> Settings </div>
        </div>
      </div>        
    </div> 
  )
}

export default Study
