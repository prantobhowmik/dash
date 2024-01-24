import React from 'react'
import Image from 'next/image'

const Expl = () => {
  return (
    <div className='border-[1px] border-gray-400  m-5 rounded-lg '>
        <div>
            <h1 className='p-5 text-md font-semibold'>Explore Our Integrated Ecosystem</h1>
            <p className='text-sm p-5 -mt-6 pr-48'> Discover a variety of popular integrations tailored for your convenience.</p>
        </div>
        <div className='pl-2 flex items-center gap-5'>
                <Image src='/paypal.png' width={60} height={50}  alt='img'/>
                <Image src='/aliR.png' width={60} height={40}  alt='img'/>
                <Image src='/instasell.png' width={60} height={50}  alt='img'/>
                <Image src='/gglAna.png' width={60} height={40}  alt='img'/>
                <Image src='/Shopatt.png' width={60} height={50}  alt='img'/>


        </div>
        <button className='m-5 text-white text-sm w-40 h-8 p-1 rounded-lg bg-gray-800 hover:bg-gray-500' type='button'>Explore Integrations</button>
    </div>
  )
}

export default Expl