import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContext';
import useTitle from '../../hook/useTitle';

const AddServices = () => {

    useTitle('Add New Service')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { displayName, email, photoURL, metadata } = user

    // const services = useLoaderData()
    // const { title, img, price, paragrap, _id } = services
    // console.log(_id);

    const addServiceSubmitBtn = (event) => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const servicePhoto = form.photo.value;
        const title = form.title.value;
        const serialId = form.serialId.value;
        const scliceRating = form.ratings.value;
        const message = form.message?.value;

        const order = {
            price: price,
            rating: scliceRating,
            title: title,
            id: serialId,
            paragrap: message,
            img: servicePhoto,
        }

        console.log(order)

        fetch('https://assignment-server-site-10.vercel.app/services', {
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
                    alert('success fully Service set Database')
                    event.target.reset()
                    // navigate('/all-services')
                }
            }).catch(error => console.log(error))



    }

    const heldeleOnBlure = () => {

    }

    return (
        <>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50 w-[100%] justify-center lg:flex">


                <form onSubmit={addServiceSubmitBtn} className=" w-[100%] lg:w-[50%] ">
                    <div className="">
                        <h1 className="text-center text-2xl"><span className='text-red-500'>Add You Service Title Name</span> Service Review Add Box.</h1>
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
                            <label htmlFor="email" className="text-sm">Service Title</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='title' type="text" placeholder="service title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        {/* -----img */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Service Image. suggess <span className='text-red-500'>imagebb.com</span> photo link.</label>
                            <input onBlur={heldeleOnBlure} id="photo" name='photo' type="text" placeholder="service photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        {/* --price */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Service Price</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='price' type="number" placeholder="service price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        {/* --rating */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Service Rating</label>
                            <input onBlur={heldeleOnBlure} id="rating" name='ratings' type="number" placeholder="rating..." className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
                        </div>
                        {/* --service id */}
                        <br></br>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Service Serial Id</label>
                            <input onBlur={heldeleOnBlure} id="serial-id" name='serialId' type="number" placeholder="Serial Id" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
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

export default AddServices;