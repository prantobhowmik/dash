import React from 'react'
import Butn from './Butn'
import ChartComponent from './ChartComponent';
import Chart from 'chart.js/auto';


Chart.register();

const ShipD: React.FC<{ nameC: string; onClick: () => void; totalOrder: string;  }> = ({nameC, totalOrder, onClick}) => {


  const chartData = [117.6, 78.8, 78.8, 78.8, 40];
  const chartLabels = ['Exeption', 'Instransit', 'Pending', 'Delivered', 'Out for Delivery'];


  const handleBtnClick = () => {
    console.log('Butn clicked!');
  };
  return (
    <div className='w-max rounded-lg m-10 h-96 bg-white border-[1px] border-yellow-300'>
        <div className='flex items-center justify-between mr-5' >
            <h1 className='p-5 text-lg font-semibold'>{nameC}</h1>
            <h1>Total Orders: {totalOrder}</h1>
            
        </div>
      <div className='pl-5 pr-5 '>
        <div className='flex items-center justify-between gap-1'>
            <Butn
             btnTxt={"Delivered"}
             onClick={onClick}/>
            <Butn
             btnTxt={"Out for delivery"}
             onClick={onClick}/>
            <Butn
             btnTxt={"Intransit"}
             onClick={onClick}/>
            <Butn
             btnTxt={"Pending"}
             onClick={onClick}/>
            <Butn
             btnTxt={"Exception"}
             onClick={onClick}/>
            
        </div>
        <div className='items-center flex justify-center pt-5'>
        <ChartComponent  labels={chartLabels as any} data={chartData as any}  />
        </div>
        
      </div>
      
    </div>
  )
}

export default ShipD