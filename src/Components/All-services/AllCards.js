import React from 'react';
import { Link } from 'react-router-dom';

const AllCards = ({ services }) => {
    console.log(services)
    return (
        <>
            <div className="card max-w-[300px]  bg-violet-900 shadow-xl mt-3  ">
                <figure><img className='' src={services?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="justify-between flex">
                        <h2 className="card-title"> {services?.title} </h2>
                        <div className="badge badge-secondary">NEW</div>
                    </div>
                    <p>{services?.paragrap.slice(0, 100)}</p>
                    <div className="card-actions justify-between">
                        <h1 className="text-1xl text-success">Price : {services?.price}</h1>
                        <Link to={`/card_details/${services?.id}`} className=" px-8 py-[6px] btn-secondary rounded-lg text-black">Details..</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCards;