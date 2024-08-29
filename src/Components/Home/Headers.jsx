import Home from './Home.jsx';


// Description: This function helps in showing the main header of the web page containing the logo, contact details and the search box.
function MainNav() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-white-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="src/assets/TP-logo.webp" style={{ height: '2rem' }} alt="Tyreplex Logo" />
                </a>

                <form className="flex items-center m-0" style={{ width: '28rem' }}>
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input type="text" id="simple-search" className="w-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full ps-2 p-2  dark:bg-white-700 dark:border-black-200 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-200 dark:focus:border-blue-200" placeholder="Search for products...." required />
                    </div>
                    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-gray bg-white-700 rounded-lg border border-black-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-white-600">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>

                <div className="ph1">
                    <p className='font-semibold flex'>Phone</p>
                    <p>+980-74643675</p>
                </div>

                <div className="ph1">
                    <p className='font-semibold flex'>Email</p>
                    <p>tyreplex@gmail.com</p>
                </div>

            </div>
        </nav>
    );
}


// Description: This is the suggested nav bar for the web page associated with the categories.
function SubNav() {
    return (
        <nav className="bg-gray-50 dark:bg-white-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center justify-around">

                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white" type="button">Shop by categories <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    {/* Dropdown menu  */}
                    <div id="dropdownHover" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>

                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <button href="#" id="dropdownHoverButton1" data-dropdown-toggle="dropdownHover1" data-dropdown-trigger="hover" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white hover:underline" aria-current="page">Car Tyres</button>

                            <div id="dropdownHover1" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MRF Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CEAT Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Apollo Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Goodyear Tyres</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button href="#" id="dropdownHoverButton2" data-dropdown-toggle="dropdownHover2" data-dropdown-trigger="hover" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white hover:underline">Bike Tyres</button>

                            <div id="dropdownHover2" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">JK Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Michellin Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Apollo Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Bike Tyres</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button href="#" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white hover:underline">Tyre Pressure</button>

                        </li>
                        <li>
                            <button href="#" id="dropdownHoverButton4" data-dropdown-toggle="dropdownHover4" data-dropdown-trigger="hover" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white hover:underline">Commercial Tyres</button>

                            <div id="dropdownHover4" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Commercial Tyres</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button href="#" id="dropdownHoverButton5" data-dropdown-toggle="dropdownHover5" data-dropdown-trigger="hover" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white hover:underline">Accessories</button>

                            <div id="dropdownHover5" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Batteries</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Alloy Wheels</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button href="#" id="dropdownHoverButton6" data-dropdown-toggle="dropdownHover6" data-dropdown-trigger="hover" className=" bg-none hover:bg-none focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-none dark:hover:bg-none dark:focus:ring-white hover:underline">More</button>

                            <div id="dropdownHover6" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cashback Offer</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Find Tyre Dealers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Compare Tyres</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Are you a tyre dealer?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Wheel Balancing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Wheel Alignment</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-3 text-black">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-2 mr-2 text-black">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-3 text-black">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>


                    </div>
                </div>
            </div>
        </nav>
    )
}


export default function Header() {
    return (
        <>
            <MainNav />
            <SubNav />
            <Home />
        </>
    )
}