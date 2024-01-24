import React from 'react'

const Eval = ({onClick}) => {
  return (
    <div className=' pb-10 '>
        <div className=' border-[1px] border-gray-400 rounded-lg'>
            <div >
                <h1 className='p-5 font-semibold'>Evaluate Your Brand Aesthetics with Custom Tracking Page Styles</h1>
                <p className='p-5 pt-0 text-sm'>Immerse your customers in a branded experience by personalizing the colors on your tracking page. </p>
            </div>
            <div className='flex'>
                <div className='container pl-5 -mt-2 pb-5'>
                    <label className='flex'>Accent Color</label>
                    <input type='text'className=' border-[1px] border-gray-400 rounded-lg placeholder:text-black p-1 ' placeholder='FF9898'/>
                </div>    
                <svg className='bg-[#ff9898] w-1/3 h-8 rounded-lg mt-4 mr-4'/>
            </div>
            <div className='flex'>
                <div className='container pl-5 -mt-2 pb-5'>
                    <label className='flex'>Text Color</label>
                    <input type='text'className=' border-[1px] border-gray-400 rounded-lg placeholder:text-black p-1 ' placeholder='571010'/>
                </div>    
                <svg className='bg-[#571010] w-1/3 h-8 rounded-lg mt-4 mr-4'/>
            </div>
            <div className='flex'>
                <div className='container pl-5 -mt-2 pb-5'>
                    <label className='flex'>Backgroud Color</label>
                    <input type='text'className=' border-[1px] border-gray-400 rounded-lg placeholder:text-black p-1 ' placeholder='FFEAEA'/>
                </div>    
                <svg className='bg-[#FFEAEA] w-1/3 h-8 rounded-lg mt-4 mr-4'/>
            </div>
            <div className="flex px-6 py-6">
                <button
                className="bg-white hover:bg-gray-200 text-black font-bold w-28 h-8 border border-gray-300 rounded-lg" onClick={onClick}> 
                 <h1 className=''>Preview</h1>
                </button>
                <button
                className="ml-2 text-center bg-gray-800 hover:bg-gray-600 text-white text-[14px] p-1 w-40 h-8 rounded-lg" onClick={onClick}>
                 <h1>Apply Colors </h1>
                </button>
            </div>    
                
            
        </div>
    </div>
    
  )
}

export default Eval