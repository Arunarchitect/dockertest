import React from 'react'
import CountUp from 'react-countup'
import heroImg from '../../images/photo.png'

const Hero = () => {
  return (
    <section className="pt-0" id='about'>
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                {/* Hero left content */}
                <div className="w-full md:basis-1/2">
                    <h5 data-aos="fade-right" data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'  > Hello Welcome</h5>
                    <h1 data-aos="fade-up" data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5' >I am Arun Ravikumar <br /> Architect and Planner</h1>
                    <div data-aos="fade-up" data-aos-duration='1800' data-aos-delay='200' className="flex items-center gap-6 mt-7">
                    <a href="#contact">
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><i className="ri-mail-line"></i>Hire Me</button>
                    </a>
                    <a href="#portfolio">
                        <button className=' text-smallTextColor font-[600] text-[16px] border-b  border-solid border-smallTextColor  '>See Portfolio</button>
                    </a>
                    

                </div>
                    <p data-aos="fade-left" data-aos-duration='1500' className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                        <span><i className="ri-apps-line"></i></span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, provident earum maiores odio repellat excepturi labore debitis molestias doloribus nesciunt, harum cupiditate ducimus ea tempore totam omnis vero ipsam. Inventore.</p>
                        <div className="flex items-center gap-9 mt-14">
                            <span className='text-smallTextColor  text-[15px] font-[600]'> 
                                Follow me
                            </span>
                            <span>
                                <a 
                                className='text-smallTextColor  text-[15px] font-[600]' 
                                href="#youtube">
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                className='text-smallTextColor  text-[15px] font-[600]' 
                                href="#github">
                                    <i className="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                className='text-smallTextColor  text-[15px] font-[600]' 
                                href="#facebook">
                                    <i className="ri-facebook-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a 
                                className='text-smallTextColor  text-[15px] font-[600]' 
                                href="#instagram">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </span>
                        </div>
                </div>
                
                {/* Hero left end */}
                {/* hero image */}
                <div className="basis-1/3 mt-10 sm:mt-0">
                    <figure className='flex items-center'>
                        <img src={heroImg} alt="" />
                    </figure>
                </div>
                {/* hero image end */}
            </div>
        </div>
    </section>
  )
}

export default Hero