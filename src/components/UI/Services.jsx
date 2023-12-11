import React from 'react'
import heroImg from '../../images/photo.png'

const Services = () => {
  return (
    <section id="services">
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                    My Expertise
                </h2 >
                <p className='lg:max-w-[600px] lg:mx-auto text-headngColor font-[500] text-[16px] leading-7'>I specialize in providing comprehensive architectural services, guiding clients through every stage of the design and construction process. From initial planning and conceptualization to detailed design, 3D modeling, municipal certifications, and on-site supervision, my expertise ensures a seamless and successful execution of architectural projects. Whether you're envisioning a residential masterpiece, a commercial space, or an urban development, I am here to transform your ideas into tangible, aesthetically pleasing, and functional realities. My goal is to help you navigate the complexities of architectural endeavors, bringing your vision to life while adhering to the highest standards of creativity and compliance.</p>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
                        {/* left card */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                                        <div data-aos='fade-right' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                            Project Reports
                                            </h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                Preperation of Brief and Detailed project reports by analysing the project's feasibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={heroImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* right card */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                                        <div data-aos='fade-left' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                Design
                                            </h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                Design Concepts, development and detailing with respect to the client's needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={heroImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* left card */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                                        <div data-aos='fade-right' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                Design Analysis
                                            </h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                Efficient analysis and design optimisation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={heroImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* right card */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                                        <div data-aos='fade-left' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150 ">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                Documentation.
                                            </h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                Proper Documentations for various requirements including regulatory approvals etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={heroImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services