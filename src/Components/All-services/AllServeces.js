import React, { useEffect, useState } from 'react';
import AllCards from './AllCards';

const AllServeces = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => err.message)
    }, [])
    // console.log(services);
    return (
        <>
            <section className='banners'>
                <div className="header">
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