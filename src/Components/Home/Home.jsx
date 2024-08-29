import './Home.css';
import React from 'react';


// Description: This is a carousel function implemented to display the google reviews provided by the customers.
function Carousel() {
    return (
        <>
            <p className='z-50 text-center text-lg font-medium m-2'>Here's what our customers speaks</p>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden md:h-96">
                    <div className="hidden duration-700 ease-in-out flex items-center justify-center bg-orange-100" data-carousel-item>
                        {}
                        <div className='border border-gray-600 rounded-lg w-5/12 p-5 bg-white'>
                            <div className="flex"><img className='w-20 ml-1 mb-3 border border-gray-700 p-1 rounded-full' src="src\assets\man.jpg" alt="" /><span className='font-semibold text-lg'>Nitin Bhardwaj</span></div>
                            <p className='text-left'>"Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your services and products offerred. We would love to collaborate again in future...."</p>
                        </div>
                    </div>
                    <div className="hidden duration-700 ease-in-out flex items-center justify-center bg-orange-100" data-carousel-item>
                        <div className='border border-gray-600 rounded-lg w-5/12 p-5 bg-white'>
                            <div className="flex"><img className='w-20 ml-1 mb-3 border border-gray-700 p-1 rounded-full' src="src\assets\man.jpg" alt="" /><span className='font-semibold text-lg'>Rupal Chaudhary</span></div>
                            <p className='text-left'>"I had a great experience . The customer service was outstanding, with the staff being knowledgeable and helpful throughout the process. Highly recommended for quality and service....."</p>
                        </div>
                    </div>
                    <div className="hidden duration-700 ease-in-out flex items-center justify-center bg-orange-100" data-carousel-item>
                        <div className='border border-gray-600 rounded-lg w-5/12 p-5 bg-white'>
                            <div className="flex"><img className='w-20 ml-1 mb-3 border border-gray-700 p-1 rounded-full' src="src\assets\man.jpg" alt="" /><span className='font-semibold text-lg'>Chetan Singh</span></div>
                            <p className='text-left'>"Have got a great experience. The workers are proficient and know there job very well. The good think was that I don’t have to wait for too long in getting the job done. ..."</p>
                        </div>
                    </div>
                    <div className="hidden duration-700 ease-in-out flex items-center justify-center bg-orange-100" data-carousel-item>
                        <div className='border border-gray-600 rounded-lg w-5/12 p-5 bg-white'>
                            <div className="flex"><img className='w-20 ml-1 mb-3 border border-gray-700 p-1 rounded-full' src="src\assets\man.jpg" alt="" /><span className='font-semibold text-lg'>Sanjay Sharma</span></div>
                            <p className='text-left'>"Nice experience, the behaviour of the shop owner is very nice. Quick & quality service also the staff is well behaved......"</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    )
}


// Description: This is the first section of the web page, it shows the address and the related photograpgh of the shop for idetifying it. This panel contains all the details about the shop including the timings and the directions.
function HomeMenu() {

    return (
        <>
            <div className='flex flex-row border border-gray-200 rounded-lg p-2 bg-white mt-2 mb-2'>
                <div className="image" style={{ width: '50%' }}>
                    <img style={{ width: '100%' }} src="src\assets\TP-img.jpg" alt="" />
                </div>
                <div className='pl-10 text-left pr-2' style={{ width: '50%' }}>
                    <h1 className='font-semibold text-gray-800 flex items-center justify-between' style={{ fontSize: '25px' }}>SHREE HEMKUNT TYRES AND SERVICES <div className="verif text-green-600 text-sm flex items-center"><img style={{ width: '1.2rem', height: '1.5rem' }} src="src\assets\verified.png" alt="" />Verified</div></h1>
                    <div className='flex flex-row items-center mt-2'>
                        <div className='bg-green-600 text-white rounded-lg w-8 text-sm text-center'>4.9</div>
                        <div className='flex p-1'>{[...Array(5)].map((_, i) => (
                            <img key={i} style={{ width: "1.2rem", height: '1.2rem' }} src="src\assets\star.webp" alt="star" />
                        ))}
                            <p className='ml-2'><u>2278</u> Reviews</p>
                        </div>
                    </div>
                    <div className='flex mt-1'>
                        <img className='mt-1.5 mr-4' style={{ width: '1rem', height: '1rem' }} src="src/assets/location.png" alt="location" />
                        <p>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
                    </div>
                    <div className='flex mt-1 '>
                        <img className='mt-1.5 mr-4' style={{ width: '1rem', height: '1rem' }} src="src/assets/clock.png" alt="location" />
                        <p>Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
                    </div>
                    <a href="https://maps.app.goo.gl/LC5xdKqaQZjuiXEEA" target='_blank'>
                    <button type="button" className="text-red-500 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none font-semibold px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ring-1 ring-red-800 mt-5 text-lg">Get Directions</button>
                    </a>
                </div>

            </div>
        </>
    )
}


// Description: This is the exported function of this page.
const Home = () => {
    return (
        <>
            <HomeMenu />
            <Carousel />
        </>
    )
}

export default Home