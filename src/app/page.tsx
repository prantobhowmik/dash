"use client"


import CardV from './Components/CardV';
import Card2V from './Components/Card2V';
import Card3V from './Components/Card3V';
import Navi from './Components/Navi';
import Bod from './Components/Bod';
import ShipD from './Components/ShipD';
import FactO from './Components/FactO';
import TrackD from './Components/TrackD';
import Eval from './Components/Eval';
import HtmlE from './Components/HtmlE';
import Exclu from './Components/Exclu';
import Expl from './Components/Expl';


export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <main className=' '>
      <div className=''>
        <Navi />
      </div>
      <div className='flex flex-col pb-8 '>
        <div className='p-10 pb-0 pt-10'>
          <h1 className='text-2xl font-bold pl-7 pt-10 pb-5'>Welcome, John Mathew!!</h1>
        </div>
        <div className='flex flex-col items-center justify-between gap-5 md:flex-row md:pl-16 pt-5 pr-4 md:pr-40'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <div className="flex flex-col items-center gap-5">
              <CardV
                title="Order Sync Successful!"
                description="Your order details from the last 30 days have been successfully synced. Check them out now!"
                buttonText="Explore Your Orders"
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <div className="flex flex-col items-center gap-5">
              <Card2V
                title="Customise Customer Notification!"
                description="Tailor Your Email Experince: Set the sender Email and Choose Notification Triggers"
                buttonText="Configure Notifications"
                onClick={handleButtonClick}
              />
            </div>
          </div>
          <div className='w-full md:w-1/3'>
            <div className="flex flex-col items-center gap-5">
              <Card3V
                title="Your Tracking Link has been grenerated"
                description="Include the "
                description1=" to Your Store's Navigation Menu"
                buttonText="Copy Link"
                buttonText1={'Go to Navigation menu'}
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-orange-50 mt-10 pb-5'>
                    <div className='p-10 pb-0 pt-5'>
                      <h1 className='text-2xl font-bold pl-7 pt-10 pb-5'>Instant Drive into Your Performance Metrics</h1>
                    </div>
                  <div className='flex items-center gap-8 mr-40 pl-16 pt-8'>
                      <div className='border-[1.5px] bg-purple-50 rounded-lg border-purple-400 '> 
                          <Bod
                          buttonText={'Lifetime'}
                          onClick={handleButtonClick}
                          />
                      </div> 

                      <div className='bg-white rounded-lg'>
                            <Bod
                            buttonText={'Last Week'}
                            onClick={handleButtonClick}
                            />
                      </div>
                      <div className='bg-white rounded-lg'>
                          <Bod
                          buttonText={'Last Month'}
                          onClick={handleButtonClick}
                          />
                      </div>
                      <div className='bg-white rounded-lg'>
                          <Bod
                          buttonText={'Last Year'}
                          onClick={handleButtonClick}
                          />
                      </div>
                      <div className='bg-white rounded-lg'>
                          <Bod
                          buttonText={'Customize Time Line  ⊟ '}
                          onClick={handleButtonClick}
                          />
                      </div>
      </div>
        <div className='flex items-center justify-between'>
          <div className=''>
            <ShipD
            nameC={'Shipment Updates'}
            totalOrder={'394'}
            
            onClick={handleButtonClick}
            />
          </div>
          <div>
            <FactO 
            nameF={'Star Facts about your orders!!!'}
            para1={'There are 8 Shipments that have been in out for delivery for more than 3 days.'}
            para2={'There are 5 shipments in expection right now'}
            para3={'The maximum chargebacks are from Miami.'}
            />
          </div>
          <div>
          <TrackD
            titT={'Tracking Page Views Vs Orders'}
            DesT={'Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.'}
            Orders={'Orders'}
            orderCount={'80'}
            Track={'Track Page Views'}
            trackCount={'44'}
            />
          </div>
        </div>
      </div>
          <div className='p-5'>
                <div className='p-10'>
                  <h1 className='text-2xl font-bold pl-7 pt-10 pb-5'>Discover the Heart of Our Functionality </h1>
                </div>
            <div className='flex items-center justify-between'>
                <div className='w-1/3'>
                    <Eval 
                    onClick={handleButtonClick}/>
                </div>
                <div className='flex items-center justify-between flex-wrap'>
                      <div>
                        <Exclu/>
                      </div>
                      <div className=''>
                        <Expl/>
                      </div>
                </div>
                <div className='w-1/3'>
                    <HtmlE
                    onClick={handleButtonClick}/>
                </div>
            </div>
          </div>
    </main>
  );
}
