import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContext';
import useTitle from '../../hook/useTitle';
import DaynamicCard from './DaynamicCard';

const CardDetails = () => {

    useTitle('Card-Details')
    const services = useLoaderData();
    const { img, title, price, rating, paragrap, _id } = services;

    console.log(services);
    // ---------------- _id user -----------

    const [allReviws, setReviws] = useState([]);

    useEffect(() => {

        fetch(`https://assignment-server-site-10.vercel.app/all-review?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviws(data))
            .catch(err => console.log(err))

    }, [])
    // console.log(allReviws)


    const { user } = useContext(AuthContext);
    // console.log(user);
    //location
    const navigat = useNavigate()
    const location = useLocation()
    // const froms = location?.state?.from?.pathname || '/all-services';

    return (
        <>
            <div className="div w-[100%] grid md:flex lg:flex lg:px-20 ">
                <div className="w-[40%] px-5">

                    <img src={img} alt="" className="object-cover  rounded-md xl:col-span-3 dark:bg-gray-500 w-full" />
                </div>
                <div className="w-[56%] px-5">
                    <div className="flex justify-between">
                        <h1 className='block mb-2 dark:text-violet-400 text-3xl text-center mt-3'>1 Hour : {price}</h1>
                        <h1 className='block  dark:text-amber-600 text-2xl text-center mt-3'>Rasting : {rating}</h1>

                    </div>
                    <span className="block mb-3 text-slate-300 text-bold text-3xl  my-2">{title}</span>
                    <p className='text-[19px] '>{paragrap}.. <br></br> <br></br>Priya gets cold feet during her wedding. Asha encourages her, realizing in turn that she truly loves Ravi. She goes to his family's restaurant to see him with another woman, and gives a speech about what a great guy he is. Priya and Nick marry and introduce DJ Spellbound at the reception.</p>
                </div>

                {/* --------------optional section----------- */}


            </div>
            <section>
                <div className="h-[auto] py-10  lg:px-20 mt-10">

                    {
                        user?.email ?
                            <>
                                {/* -----add review page--------- */}
                                <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                                    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                                        <div className="block">
                                            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">You  can add review this services ! </h1>
                                            <p className='pl-1 py-2 text-2xl text-center md:text-start lg:text-start '>Total Reviws :  <span className='text-amber-600 text-bold'>{allReviws.length} count</span></p>
                                        </div>
                                        <Link to={`/add-reviws/${services?._id}`}>
                                            <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Add Reviews</button>
                                        </Link>

                                    </div>
                                </section>
                                {/* -----add review page--------- */}
                            </>
                            :
                            <>
                                {/* ----singup now----- */}
                                <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                                    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                                        <h1 className="text-4xl font-bold leading-none text-center">Sign up now</h1>
                                        <p>please log in then access reviews add services</p>
                                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                                            <Link to='/registrar'>
                                                <button className="px-6 py-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sing up</button>
                                            </Link>
                                            <Link to='/login' state={{ from: location }} replace >
                                                <button className="px-6 py-2 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Log in</button>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                                {/* ----singup now----- */}

                            </>
                    }

                </div>
            </section>


            {/* All review this collaction */}

            <section className='flex justify-center lg:px-20 my-10 bgs'>
                <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 ">
                    {/* ------card details reviews------ */}
                    <div className="flex justify-between pb-10">
                        <h2 className="text-xl font-semibold">Your cart</h2>
                        <div className="space-y-1 text-right">
                            <p>Total Reviews :
                                <span className="font-semibold text-amber-500"> {allReviws.length}..</span>
                            </p>
                            <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                        </div>
                    </div>



                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">


                            {
                                allReviws.length > 0 ?
                                    <>
                                        <thead>
                                            <tr>

                                                <th className=''>Name : {allReviws.length}</th>
                                                <th>Email</th>
                                                <th>Review Reting</th>

                                            </tr>
                                        </thead>
                                    </>
                                    :
                                    <>
                                        <h1 className='text-center text-2xl'>Not Founded Reviews</h1>
                                    </>
                            }

                            {/* ---table--- */}
                            <tbody>

                                {
                                    allReviws.map(data => <DaynamicCard user={user} data={data} key={data._id} >

                                    </DaynamicCard>)
                                }
                            </tbody>


                        </table>
                    </div>


                    <div className="flex justify-end space-x-4 pt-10">
                        <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </button>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardDetails;