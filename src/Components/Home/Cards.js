import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ services }) => {
    console.log(services);
    return (
        <>
            <div className="card max-w-[300px]  bg-violet-900 shadow-xl mt-3  ">
                <figure><img className='' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <h1 className="">Price : 10$</h1>
                        <Link className=" px-8 py-[6px] btn-secondary rounded-lg text-black">Details..</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;