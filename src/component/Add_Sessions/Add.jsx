import React from 'react'

const Add = ({theme}) => {
  return (
    <div className={theme=== "light" ? "p-7 bg-white text-black" : "p-7 bg-gray-900 text-white" }>
      <h1 className='text-3xl font-bold'>Add Study Session</h1>
      <p className={`mt-1 ${theme === "light" ? "text-black/40": "text-white/60"}`}>Record a new study session </p>

      <div className='pl-7 pt-2 shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl mt-5 w-xl h-120 '>
        <div >
          <form className='mt-6 space-y-4 max-w-md' >
            <h1 className='text-xl'>Session Details</h1>

            <label className='font-bold' for="subject">Subject *</label><br />
            <input type="text" id='subject' placeholder='Select a subject' className="w-full p-1 border border-black rounded-xl mt-1 bg-neutral-300" /><br />

            <label className='font-bold' for="hours"> Hours Studied *</label><br />
            <input type="text" placeholder='e.g 2.5' className="w-full p-1 border border-black rounded-xl mt-1 bg-neutral-300" /><br />

            <label className='font-bold' for="date">Date *</label><br />
            <input  type="date" placeholder='11/17/2025' className=" h-10 w-36 shadow-md  p-1 border border-black rounded-xl mt-1 bg-neutral-300" /><br />

            <label className='font-bold' for="notes">Notes (Optional)</label><br />
            <input type="notes" placeholder='Add any additional notes about this study session...' className="w-full p-1 border border-black rounded-xl mt-1 bg-neutral-300" /><br />
            
            <div className='flex gap-5 '>
              <button className='bg-black text-white border border-black rounded-2xl h-10 px-6 py-2 ' type='submit'>Add Session </button> 

              <button className='bg-white shadow-md text-black rounded-2xl px-6 py-2 ' type='reset'>Reset</button><br />
            </div>

            
          </form>
           

        </div>
       
      </div>
    </div>
  )
}

export default Add
