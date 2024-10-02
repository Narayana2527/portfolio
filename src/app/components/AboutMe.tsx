
const Aboutme = () => {
  return (
    <div style={{backgroundImage: 'linear-gradient(to right, #161614, rgb(98 98 119))'}} id='about'>
        <div className='container mx-auto py-5'>
            <div>
                <h1 className='text-4xl text-white text-center'>About Me</h1>
                <h2 className='text-3xl text-white mt-2'>Skills:</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <div>
                        <label className='text-2xl text-white'>React.js</label>
                        <progress value='70' max='100' className='w-full'>70%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-white'>Node.js</label>
                        <progress value='70' max='100' className='w-full'>70%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-white'>HTML</label>
                        <progress value='90' max='100' className='w-full'>90%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-white'>CSS</label>
                        <progress value='90' max='100' className='w-full'>90%</progress>
                    </div>
                    <div className='mt-2'>
                        <label className='text-2xl text-white'>JavaScript</label>
                        <progress value='70' max='100' className='w-full'>70%</progress>
                    </div>
                </div>            
                <div>
                    <div className='p-3'>
                        <p className='text-[16px] text-white px-2'>
                        With 1.4 years of experience in UI design and a strong understanding of front-end development,
                        I specialize in creating visually appealing, responsive, and user-friendly web applications.
                        </p>
                        <p className='text-[16px] text-white px-2 mt-2'>
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
