
const Banner = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12' style={{backgroundImage: 'linear-gradient(to right,#494f19, #011210)'}}>
        <div className=' flex items-center h-[400px] lg:h-[500px] md:h-[500px] md:col-span-6 col-span-full' >
          <div className='ps-3 md:ps-5 lg:ps-6'>
            <h1 className='text-2xl lg:text-3xl md:text-3xl text-white font-extrabold'>I am</h1>
            <h2 className='text-3xl lg:text-4xl md:text-4xl mt-2 text-white font-bold'>NARAYANA AVULA</h2>
            <h3 className='text-3xl lg:text-4xl md:text-4xl mt-2 text-white font-bold'>SOFTWARE DEVELOPER</h3>
            <p className='mt-2 text-sm text-white'>
            I specialize in creating visually appealing and user-centered interfaces for both web and mobile applications.
            </p>
            <div className='flex mt-3'>
              <button  className='w-[140px] bg-orange-600 text-white text-sm px-3 py-2'>
                  About Me
              </button>

              <button  className='w-[140px] ms-3 bg-black outline outline-2 outline-white  text-white text-sm'>
                  Contact
              </button>
            </div>
          </div>
        </div>        
        <div className='hidden md:block md:col-span-6 pt-[20px]'>   
            <img src='/Images/profile.jpg'  className='rounded-full w-[400px] h-[400px] mx-auto block' alt='description' />         
        </div>
        {/* image abosulte positioned */}
        {/* <img src={imagebanner} alt='description' className='hidden md:block absolute w-[400px] h-[400px] top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-50' />             */}
      </div>
    </div>
  )
}
export default Banner
