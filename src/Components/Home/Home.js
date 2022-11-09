import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight, FaGoogleWallet, FaSpaceShuttle } from 'react-icons/fa';
import Cards from './Cards';
import './home.css'

import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const Home = () => {

    const [services, setServices] = useState([]);

    useTitle('home photographer')

    useEffect(() => {
        fetch('https://assignment-server-site-10.vercel.app/servicesl')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => err.message)
    }, [services])
    // console.log(services);

    return (
        <>
            <section>
                <div className=" w-full gradientBg">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-14 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white pb-8 text-shadows">Wedding Season 2022</h1>
                        <p className="mt-6 mb-0 text-lg sm:mb-0 xl:max-w-3xl dark:text-gray-900 lg:hidden">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50 lg:hidden">Get started</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900  lg:hidden">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src='https://i.ibb.co/HNPY43w/shutterstock-483268294.jpg' alt="" className="bg-opacity-80 w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-56 dark:bg-gray-500 hidden lg:block" />
            </section>

            {/* ----------card lisht------------ */}
            <section className='banners'>
                <div className="header">
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-10 lg:px-40">
                        <input type="checkbox" id="my-modal" className="modal-toggle" />

                        {/* <label  className="btn">open modal</label> */}

                        {/* Put this part before </body> tag */}


                        {
                            services.map((servicess, index) => <Cards index={index} services={servicess} key={servicess?._id}></Cards>)
                        }

                    </div>
                    <Link to={'/all-services'}>
                        <button className="btn btn-secondary flex mx-auto mb-10 px-14">More Services        <span className='ml-3 text-[18px] hover:text-black'><FaArrowRight></FaArrowRight>
                        </span>
                        </button>
                    </Link>
                </div>
            </section>

        </>
    );
};

export default Home;