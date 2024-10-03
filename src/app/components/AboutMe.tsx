
const Aboutme = () => {
  return (
    <div className="py-5 bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url(/Images/aboutbgImage.jpg)'}} id='about'>
        <div className='container mx-auto py-10'>
            <div>
                <h1 className='text-4xl text-black text-center'>About Me</h1>                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="px-3">
                    <h2 className='text-3xl text-black mt-2 py-2'>Skills:</h2>
                    <div>
                        <label className='text-2xl text-black py-1'>React.js</label>
                        <progress value='70' max='100' className='w-full'>70%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-black py-1'>Node.js</label>
                        <progress value='70' max='100' className='w-full'>70%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-black py-1'>HTML</label>
                        <progress value='90' max='100' className='w-full'>90%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-black py-1'>CSS</label>
                        <progress value='90' max='100' className='w-full'>90%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-black py-1'>JavaScript</label>
                        <progress value='70' max='100' className='w-full'>70%</progress>
                    </div>
                </div>            
                <div className="px-5 pt-5">
                    <div className='p-3'>
                        <p className='text-[16px] text-black px-2'>
                        With 1.4 years of experience in Web Development I can develop and create visually appealing, responsive, and user-friendly web applications.
                        </p>
                        <p className='text-[16px] text-black px-2 mt-2'>
                        My expertise spans across designing intuitive user interfaces using HTML, CSS, Bootstrap, and JavaScript, ensuring a seamless user experience.
                        I also possess development skills in React.js and Node.js, which allow me to bridge the gap between design and functionality, delivering complete solutions that are not only aesthetically pleasing but also highly functional.
                        I am proficient in integrating RESTful APIs, working with both MySQL and NoSQL databases, and optimizing websites for performance and accessibility.
                        Whether you need a captivating UI design or end-to-end web development, I can help bring your project to life.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default Aboutme
