import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UseContext';

const InputReview = () => {
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL, } = user
    console.log(displayName);
    const services = useLoaderData()
    const { title, img, price, paragrap } = services

    // const [user, setUser] = useState({})

    // const handleSubmitBtn = (event) => {
    //     event.preventDefault()
    //     // console.log(user);
    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user),
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             alert('User set data to database', data)
    //             event.target.reset()
    //         }).catch(error => console.log(error))
    // }
    // //all input fild value onblure
    // const heldeleOnBlure = (event) => {
    //     const value = event.target.value;
    //     const field = event.target.name;
    //     const newUser = { ...user }
    //     newUser[field] = value;
    //     setUser(newUser);
    // }




    const handleSubmitBtn = () => {

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
                            <input onBlur={heldeleOnBlure} id="rating" name='rating' type="numbser" placeholder="rating..." className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-white py-2 placeholder:px-5 placeholder:text-white px-3" required />
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