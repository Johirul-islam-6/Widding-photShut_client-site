import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UseContext';

const InputReview = () => {
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL, metadata } = user

    const services = useLoaderData()
    const { title, img, price, paragrap, _id } = services
    console.log(_id);

    const handleSubmitBtn = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const scliceRating = rating.slice(0, 1)
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            reting: scliceRating,
            email,
            message,
            img: photoURL,
            time: user?.metadata?.creationTime,
        }

        console.log(order)

        fetch('http://localhost:5000/all-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('success fully set Database')
                    event.target.reset()
                }
            }).catch(error => console.log(error))



    }


    const heldeleOnBlure = () => {

    }

    return (
        <>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50 w-[100%] justify-center lg:flex">


                <form onSubmit={handleSubmitBtn} className=" w-[100%] lg:w-[50%] ">
                    <div className="">
                        <h1 className="text-center text-2xl"><span className='text-red-500'>{services?.title}</span> Service Review Add Box.</h1>
                    </div>
                    <div className="grid lg:grid-cols-1 grid-cols-1 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Full Name</label>
                            <input onBlur={heldeleOnBlure} defaultValue={displayName} id="firstname" name='name' type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        <br />
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input onBlur={heldeleOnBlure} defaultValue={email} id="email" name='email' type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Service Rating</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='rating' type="number" placeholder="rating..." className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Message</label>
                            <textarea name='message' className="textarea textarea-secondary w-full" placeholder="Bio" required></textarea>
                        </div>

                    </div>
                    <br></br>
                    <div className="col-span-full sm:col-span-3">
                        <button type='submit' className='w-32 mx-auto  py-2 bg-gray-300 text-black hover:bg-amber-500 rounded-lg '>Submit</button>
                    </div>





                </form>
            </section>
        </>
    );
};

export default InputReview;