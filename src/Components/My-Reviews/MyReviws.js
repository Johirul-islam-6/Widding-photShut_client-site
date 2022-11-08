import React from 'react';
import { FaRegTrashAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviws = () => {
    // const user = useLoaderData();
    // console.log(user);
    // const { data } = user
    // console.log(data)

    // const [displayUsers, setDisplayUser] = useState(data)
    // ///delete user number one parson
    // const deleteBtn = user => {
    //     const agree = window.confirm(`are you sure is parson delete ${user._id}`)
    //     if (agree) {
    //         fetch(`http://localhost:5000/users/${user._id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert("User delete now successfully !");
    //                     // kintu tumar page ke relode marle delete dekabe tar jonne useState
    //                     const remainingUser = displayUsers.filter(use => use._id !== user._id);
    //                     setDisplayUser(remainingUser);
    //                 }
    //             })
    //     } else {

    //     }
    // }
    // -----------delete btn end------------
    const deleteBtn = () => {

    }
    return (
        <>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100 ">

                <div className="grid gap-6 my-16 lg:grid-cols-3 mx-20">


                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">?</div>
                        <p className="text-2xl font-semibold">
                            <b>Name : </b>
                        </p>
                        <p className="text-2xl font-semibold">Email : </p>
                        <p className="text-2xl font-semibold">ServiceName : </p>
                        <p className="text-2xl font-semibold">rating : </p>
                        <div className="flex">
                            <button onClick={() => deleteBtn()} className='w-40 mx-auto bg-red-800 py-2 hover:bg-red-600 '>Delete</button>
                            <Link to={`update/`}><button className='w-40 mx-auto bg-slate-500 py-2 hover:bg-slate-600 '>Update</button></Link>
                        </div>
                    </div>



                </div>

            </section>
        </>
    );
};

export default MyReviws;