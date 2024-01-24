import React from 'react'

const FactO = ({nameF, para1, para2, para3}) => {
  return (
    <div className='p-5 bg-[#956f00] border-[1px] h-96 rounded-lg text-white pr-10'>
        <div className=' mb-10 '>
            <h1 className='text-md font-semibold '>{nameF}</h1>
            <p className='text-sm mt-7 mb-7 '>{para1}</p>
            <p className='text-sm mt-5 mb-7 '>{para2}</p>
            <p className='text-sm mt-5 mb-7 '>{para3}</p>
        </div>
        <button className='text-sm text-black bg-white rounded-lg w-40 h-8' type='button'>Check Order Page</button>
    </div>
  )
}

export default FactO