import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import AllCards from './AllCards';

const AllServeces = () => {
    const [services, setServices] = useState([]);

    useTitle('All Service');

    useEffect(() => {
        fetch('https://assignment-server-site-10.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => err.message)
    }, [])
    // console.log(services);
    return (
        <>
            <section className='banners mt-6'>
                <div className="header">
                    <h1 className='text-4xl text-white text-bold mt-10 text-center dark:bg-gray-800  py-2' >All Services</h1>
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-10 lg:px-40">

                        {
                            services.map((servicess, index) => <AllCards index={index} services={servicess} key={servicess.id}></AllCards>)
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default AllServeces;