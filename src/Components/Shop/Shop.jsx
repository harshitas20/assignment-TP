import React, { useState } from 'react'
import './Shop.css';
import data from './Shop.json';


// Description: This function is used to display the cards containing the tyre varieties suppied by this dealer. These cards contains all the information regarding the faProductHunt. It also has a functionality of loading more rows of items as the user clicks on the "Load more" button.
function ShopCards() {
    const menuLen = 16
    const [variable, setvariable] = useState(4)
    const [visible, setvisible] = useState(true)

    const showMoreCards = () => {
        if (variable < menuLen) {
            setvariable((prev) => prev + 4)
            console.log(visible);
            
            if((variable+4)==menuLen){
                setvisible(false)
                console.log("inside if", variable);
                
            }
            console.log("final", variable);
            
        }
    }

    return (
        <>
            <p className='text-2xl text-black font-bold mb-2 mt-5'>Items Sold By This Dealer</p>
            <div className='pt-10 pb-10 rounded-t-lg'>
                <div className='flex w-full flex-row flex-wrap justify-center'>
                    {[...Array(variable)].map((_, i) => (

                        <div key={i} className="max-w-xs border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-700 h-64 flex overflow-hidden m-1.5">
                            <div className='w-48 pl-2 pt-1'>
                                <img className='w-20' src="src/assets/apollo.png" alt="" />
                                <p className='text-black text-left'>AMAZER 4G LIFE</p>
                                <p className='text-left mt-4 mb-4'>145/80 R12</p>
                                <div className='flex flex-row items-center mt-2'>
                                    <div className='bg-green-600 text-white rounded-md w-12 text-sm flex items-center justify-evenly'><i className="fa-solid fa-star text-white"></i>4.9</div>
                                    <p className='text-xs ml-1'>321 Reviews</p>
                                </div>
                                <p className='text-left text-black mt-1 text-lg'>Rs. 3,136</p>
                                <p className='text-left text-xs text-green-500 mt-2'>Offer Available</p>
                                <p className='text-left text-sm'>Tube Type</p>
                            </div>
                            <div>
                                <p className='p-1 bg-orange-100 text-black rounded-bl-md float-right text-sm'><i className="fa-solid fa-square-check mr-1"></i>5 Year Warranty</p>
                                <img className='tyreImg' src="src/assets/tyre.webp" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                {visible ? <button className='border border-purple-700 ring-1 text-purple-700 rounded-sm p-2 m-2 text-lg font-medium hover:text-white hover:bg-purple-700 ring-purple-700' onClick={showMoreCards}>Load More</button> : <></>}
            </div>
        </>
    )
}



// Description: This function displays the horizontal menu list of companies with whom the dealer deals with.
function Deals() {
    return (
        <div className='bg-white rounded-lg text-left text-black p-4 mt-2 mb-2'>
            <p className='font-bold text-lg mb-1'>Deals In &gt;</p>
            <div className="flex justify-between flex-nowrap overflow-x-auto gap-6 dealDiv">
                {data.companies.map((ele, i) => (
                    <div className=" bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-2 flex flex-col items-center justify-center comDiv" key={i}>
                        <img className='ml-3 mr-3' style={{ width: '100%' }} src={ele.logo} alt="" />
                        <p>{ele.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


// Description: This function displays the horizontal menu of the services which the dealer provides.
function Services() {
    return (
        <div className='bg-white rounded-lg text-left text-black p-4 mt-2 mb-2'>
            <p className='font-bold text-lg mb-1'>Services Offerred By This Dealer &gt;</p>
            <div className="flex flex-nowrap overflow-x-auto gap-6">
                {data.service.map((ele, i) => (
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 flex flex-col items-center justify-center" style={{ width: '20%' }} key={i}>
                        <img className='m-3' src={ele.logo} alt="" />
                        <p className='font-bold'>{ele.name}</p>
                        <button className=' rounded-md p-2 font-medium bg-red-700 text-white m-3 hover:bg-red-900'>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


// Description: This is the main exported function.
const Shop = () => {
    return (
        <>
            <Deals />
            <Services />
            <ShopCards />
        </>
    )
}

export default Shop