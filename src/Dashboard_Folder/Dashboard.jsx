import React from 'react'

const Dashboard = (props) => {
  return (
    <div>
      <div className='h-40   ml-5 p-5  w-329'>        
        <h1 className='font-bold text-2xl'>Dashboard</h1>
        <p>Overview of your study progress </p>
      </div>

      <div className=' flex  justify-between p-8 -mt-18 '>
        <div className='h-40 w-60 rounded-2xl  shadow-md p-6 '>

          <div className='flex justify-between '>
            <div className='font-semibold'>Total Hours</div>
            <div><i className="ri-book-open-line"></i></div>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold'>0.0</h1>
            <p className='text-sm'>All time</p>
          </div>

        </div>

        <div className='h-40 w-60 rounded-2xl shadow-md p-6'>
          <div className='flex justify-between '>
            <div className='font-semibold'>Weekly Hours</div>
            <div><i className="ri-arrow-right-up-long-fill"></i></div>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold'>0.0</h1>
            <p className='text-sm'>Last 7 days</p>
          </div>
        </div>


        <div className='h-40 w-60 rounded-2xl shadow-md p-6'>
          <div className='flex justify-between '>
            <div className='font-semibold'>Monthly Hours</div>
            <div><i className="ri-calendar-line"></i></div>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold'>0.0</h1>
            <p className='text-sm font-extralight'>Last 30 days</p>
          </div>

        </div>
        <div className='h-40 w-60 rounded-2xl shadow-md p-6'>
          <div className='flex justify-between '>
            <div className='font-semibold'>Most Studied</div>
            <div><i className="ri-trophy-line"></i></div>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold'>N/A</h1>
            <p className='text-sm font-extralight'>0 Hours</p>
          </div>
        </div>
        <div className='h-40 w-60 rounded-2xl shadow-md p-6'>
          <div className='flex justify-between '>
            <div className='font-semibold'>Least Studied</div>
            <div><i className="ri-focus-2-line"></i></div>
          </div>

          <div className='mt-6'>
            <h1 className='font-bold'>N/A</h1>
            <p className='text-sm font-extralight' >0 hours</p>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Dashboard
