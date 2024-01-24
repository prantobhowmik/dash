import React from 'react'

const HtmlE: React.FC<{  onClick: () => void; }> = ({onClick}) => {
  return (
        <div className=' border-[1px] border-gray-400 rounded-lg -mt-10'>
            <div >
                <h1 className='p-5 font-semibold'>Seamlessly Intetrate HTML Elements</h1>
                <p className='p-5 pt-0 text-sm '>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experince for your customers.</p>
            </div>
            <div className='p-5 -mt-6'>
                <h1>HTML Link</h1>
                    
                    <textarea  className=' w-11/12 h-44 border border-gray-400 rounded-lg outline-none placeholder:p-1 placeholder:text-black' placeholder={'Value'}/>
                        <div className="flex pt-6 ">
                            <button
                            className="bg-white hover:bg-gray-200 text-black font-bold w-28 h-8 border border-gray-300 rounded-lg" onClick={onClick}> 
                            <h1 className=''>Preview</h1>
                            </button>
                            <button
                            className="ml-2 text-center bg-gray-800 hover:bg-gray-600 text-white text-[14px] p-1 w-40 h-8 rounded-lg" onClick={onClick}>
                            <h1>Apply Changes </h1>
                            </button>
                        </div>
                    
                
            </div>
        </div>
  )
}

export default HtmlE