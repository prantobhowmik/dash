import { handleClientScriptLoad } from 'next/script'
import React from 'react'

  

 const Bod: React.FC<{ buttonText: string; onClick: () => void }> = ({buttonText, onClick}) => {
  return (
    <div>
        <div>
            <button type='button' className=' p-1 rounded-lg hover:border-[2px] border-purple-400  text-center'onClick={onClick}>{buttonText}</button> 
        </div>
    </div>
  )
}

export default Bod