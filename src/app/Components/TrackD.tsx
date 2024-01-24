import React from 'react'

const TrackD: React.FC<{ titT: string; Track: string; DesT: string; orderCount:string; Orders:string; trackCount:string}> = ({titT, DesT, Orders, orderCount, Track, trackCount}) => {
  return (
    <div>
        <div className='p-5 pr-1 max-w rounded-lg m-10 h-96 bg-white border-[1px] border-yellow-300'>
        
            <h1 className='text-lg font-semibold'>{titT}</h1>
            <h1 className='text-sm mt-3'>{DesT}</h1>
            <div>
                <div className='flex mt-5 bg-[#ffebd5] p-2 rounded-lg mr-6'>
                    <div className='ml-2 pr-20'>
                        <h1 className='text-sm font-semibold mb-1'>{Orders}</h1>
                    
                    <p className='font-bold text-5xl mt-2 mb-1'>{orderCount}</p>
                    </div>
                    <span>
                        <svg className="w-8 h-8 ml-24 mt-6 " viewBox="0 0 20 20">
							<path d="M17.896,12.706v-0.005v-0.003L15.855,2.507c-0.046-0.24-0.255-0.413-0.5-0.413H4.899c-0.24,0-0.447,0.166-0.498,0.4L2.106,12.696c-0.008,0.035-0.013,0.071-0.013,0.107v4.593c0,0.28,0.229,0.51,0.51,0.51h14.792c0.28,0,0.51-0.229,0.51-0.51v-4.593C17.906,12.77,17.904,12.737,17.896,12.706 M5.31,3.114h9.625l1.842,9.179h-4.481c-0.28,0-0.51,0.229-0.51,0.511c0,0.703-1.081,1.546-1.785,1.546c-0.704,0-1.785-0.843-1.785-1.546c0-0.281-0.229-0.511-0.51-0.511H3.239L5.31,3.114zM16.886,16.886H3.114v-3.572H7.25c0.235,1.021,1.658,2.032,2.75,2.032c1.092,0,2.515-1.012,2.749-2.032h4.137V16.886z"></path>
						</svg>
                    </span>
                </div>
                <div className='flex mt-5 bg-[#ffc879] p-2  rounded-lg mr-6'>
                    <div className='ml-2 pr-10'>
                        <h1 className='text-sm font-semibold mb-1'>{Track}</h1>
                    
                    <p className='font-bold text-5xl mt-2 mb-1'>{trackCount}</p>
                    </div>
                    <span>
                        <svg className="w-8 h-8 ml-20 mt-6 " viewBox="0 0 20 20">
							<path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
						</svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackD