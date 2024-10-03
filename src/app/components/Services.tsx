const Services = () => {
    return (
      <div className='py-[80px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: 'url(/Images/backgroundImage2.jpg)'}}>
        <div className='container mx-auto ' id='services'>
          <h1 className='text-4xl text-center text-white '>Services</h1>
          <div className='justify-start flex overflow-x-auto snap-x snap-mandatory scroll-smooth pt-7 space-x-4 no-scrollbar'>
            {/* First Card */}
            <div className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] snap-center p-2'>
              <div className='p-3 card bg-white rounded-xl drop-shadow-sm transform hover:scale-105 transition-transform duration-300 animate-fade-in'>
                <div className='card-body h-[300px]'>
                  <h1 className='text-center text-[20px]'>UI/UX Designer</h1>
                  <div className='mt-5'>
                    <p className='text-[14px]'>
                      I specialize in creating visually appealing and user-centered interfaces for both web and mobile applications. My design process focuses on enhancing usability and providing seamless user experiences through thoughtful wireframing, prototyping, and testing. With expertise in responsive design, I ensure that all interfaces function flawlessly across devices. I prioritize design consistency and usability, working with tools like Figma and Sketch to deliver intuitive solutions. Let me help you create designs that not only look great but also engage and satisfy your users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Second Card */}
            <div className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] snap-center p-2'>
              <div className='p-3 bg-white card rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300 animate-fade-in'>
                <div className='card-body h-[300px]'>
                  <h1 className='text-center text-[20px]'>Web Development</h1>
                  <div className='mt-5'>
                    <p className='text-[14px]'>
                      I offer full front-end web development services, transforming designs into responsive and interactive websites using HTML, CSS, JavaScript, and React.js. With a focus on clean, efficient code, I ensure websites are optimized for performance and cross-browser compatibility. My expertise includes building dynamic UI components and integrating RESTful APIs to create seamless user experiences. I also prioritize mobile responsiveness, ensuring your site looks great on any device. Whether starting from scratch or enhancing an existing site, I deliver functional and scalable web solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Third Card */}
            <div className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] snap-center p-2'>
              <div className='p-3 bg-white card rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300 animate-fade-in'>
                <div className='card-body h-[300px]'>
                  <h1 className='text-center text-[20px]'>React.js Developer</h1>
                  <div className='mt-5'>
                    <p className='text-[14px]'>
                      I specialize in building dynamic, fast, and scalable web applications using React.js. With expertise in creating reusable components and state management, I ensure smooth and interactive user experiences. My React.js solutions focus on performance optimization and responsive design, making applications efficient across devices. I integrate RESTful APIs seamlessly and manage front-end data efficiently with tools like Redux and Context API. From building single-page applications (SPAs) to enhancing existing projects, I deliver tailored React.js solutions that meet your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Services;
  