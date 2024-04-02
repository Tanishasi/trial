import React from 'react';
const Hero = () => {
  return (
    <div className=' w-full h-screen fixed mt-[-1.6%]'>
      {/* Image */}
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src='src/assets/bitmesra.jpg'
        alt='BIT MESRA'
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      {/* Text container */}
      <div className='absolute top-0 left-0 w-full mt-20 ml-[5%]'>
        <h1 className='text-3xl md:text-6xl font-nsans-bold text-gray-400'>Welcome</h1>
        <p className='text-gray-200 mt-2'>To campus secutrity management System</p>
        <p className='w-[55%] md:max-w-[50%] lg:max-w-[60%] sm:max-w-[25%] text-gray-200 mt-2 text=sm'>
Institute Vision
To become a globally recognized academic institution in consonance with the social, economic and ecological environment, striving continuously for excellence in education, research and technological service to the national needs.
Institute Mission
</p>
<p className='w-[55%] md:max-w-[50%] lg:max-w-[60%] sm:max-w-[25%] text-gray-200 mt-2 text=sm'>1. To educate students at Undergraduate, Post Graduate, Doctoral and Post Doctoral levels to perform challenging engineering and managerial jobs in industry
</p>
<p className='w-[55%] md:max-w-[50%] lg:max-w-[60%] sm:max-w-[25%] text-gray-200 mt-2 text=sm'>2. To provide excellent research and development facilities to take up Ph.D programmes and research  projects
</p>
<p className='w-[55%] md:max-w-[50%] lg:max-w-[60%] sm:max-w-[25%] text-gray-200 mt-2 text=sm'>3. Toskills and state-of-the-art research potential of the faculty
</p>
<p className='w-[55%] md:max-w-[50%] lg:max-w-[60%] sm:max-w-[25%] text-gray-200 mt-2 text=sm'>4. To build national capabilities in technology, education and research in emerging areas
</p>
<p className='w-[55%] md:max-w-[50%] lg:max-w-[60%] sm:max-w-[25%] text-gray-200 mt-2 text=sm'>5. To provide excellent technological services to satisfy the requirements of the industry and overall academic needs of society</p>
      </div>
    </div>
  );
};

export default Hero;
