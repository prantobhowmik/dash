import React from 'react'

const Butn: React.FC<{ btnTxt: string; onClick: () => void }> = ({btnTxt, onClick}) => {
  return (
    <div>
        <div >
            <button type="button" className='bg-orange-50 flex  border-[2px] text-sm p-1 rounded-lg' onClick={onClick}>{btnTxt}</button>
        </div>
    </div>
  )
}

export default Butn