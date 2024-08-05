import React, { useEffect } from 'react';
import './Home.css'
import gsap from 'gsap';

function Home() {

  useEffect(() => {
    gsap.to("#taste", { opacity: 1, x: 360, duration: 2 });
  }, []);
  useEffect(() => {
    gsap.to("#taste1", { opacity: 1, x:-360, duration: 2 });
  }, []);

  useEffect(() => {
   gsap.to("#name", { rotation: 180, x: -500, duration: 5 ,color:"rgb(230,3,99)"});
  }, []);
  useEffect(() => {
   gsap.to("#name1", { rotation: 180, x: -500, duration: 5 ,color:"black"});
  }, []);

  return (
    <div className=''>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        <div  className='w-[50vw] z-10 text-center'>
          <span id='name' className=' text-2xl lg:text-6xl font-bold z-10 py-5 font-black'>Madan <span id='name1' className='food text-pink-700'>Foods</span> </span>
          {/* <p id='taste' className=' z-10 text-gray-700 text-xl lg:text-4xl'>Taste the Convience: <span id='taste1' className='text-pink-700'> Food, Fast and Delivered</span></p> */}
          <div className="flex items-stretch ">
        <div id='taste' className=' z-10 text-gray-700 text-xl lg:text-4xl'> Food, Fast and Delivered</div>
        <div id='taste1' className=' z-10  text-xl lg:text-4xl text-orange-300'> Taste the Convience:</div>
      </div>



        </div>


        <div className='cover absolute top-0 left-0 right-0'>

        </div>

        <div>

        </div>
      </section>
    </div>
  );
}

export default Home;
