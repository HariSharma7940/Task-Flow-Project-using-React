import React from 'react'

const All_Sessions = ({theme}) => {
  return (
    <div className= {theme=== "light" ? "p-7 bg-white text-black" : "p-7 bg-gray-900 text-white" }>
        <h1 className='text-3xl font-bold'>All Sessions</h1>
      <p className={theme === "light" ? "text-black/40": "text-white/60"}>View and manage all your study sessions </p>

      <div className='pl-7 pt-2 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl mt-5 w-300 h-70 '>
        <div >
          <form className='mt-6 space-y-4 max-w-md' >

            <label className='font-bold' for="subject">Study Sessions</label><br />

            <div className='flex   gap-3 mt-5'>
                <div>
                    <input type="text" id='subject' placeholder=' 🔍Search sessions...' className="w-[920px] p-1 border border-black rounded-xl mt-1 bg-neutral-100 " /><br />

                </div>

                <div >
                    <button className='bg-neutral-200 px-4 py-2 pr-10 w-32 -mr-150 rounded-2xl flex items-center gap-10'>Date <i className="ri-arrow-down-s-line px-3"></i></button>

                </div>
                
                <div>
                    <button className='ml-31  px-3 py-2 shadow-md rounded-xl'><i class="ri-arrow-up-down-fill "></i></button>

                </div>               

            </div>                

            
          </form>

          <div className=' ml-95 w-90 mt-16'>
                <p className='text-black/40 '>No study sessions yet. Add your first session!</p>
            </div> 
           

        </div>
       
      </div>
      
    </div>
  )
}

export default All_Sessions
