import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UseContext';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../hook/useTitle';


const Registrar = () => {
    useTitle('Registration')
    const navigat = useNavigate()
    //user jodi login ar age onno kono page jete cay tar jonno
    const location = useLocation()

    //import data distracting in useContext(AuthContext)
    const { user, creatUser, emailVerifiCations, upDateUser, singInAutoGoogle, gitHubAutoLogIn, googleAutoLogIn } = useContext(AuthContext);
    // console.log(creatUser, emailVerifiCations, upDateUser)
    console.log(user);

    const [error, setError] = useState();
    const [successRegistion, setSuccess] = useState();

    //all from submition
    const handelSubmitbtn = (event) => {
        // not relode page 
        event.preventDefault()

        //all input field
        const from = event?.target;
        const name = from?.name?.value;
        const email = from?.email?.value;
        const password = from?.Password?.value;
        const confirmPassword = from?.cPasswor?.value

        //password condition
        const upper = /[A-Z]/;
        var letter = /[a-z]/;
        const number = /[0-9]/;
        //all condition set 1 ++

        if (password.length <= 6) {
            return setError("! Minimum 6 characters up required")

        }

        else if (!letter.test(password)) {
            return setError("👉 Please make sure password includes an lowercase letter 👈.")


        }
        else if (!upper.test(password)) {
            return setError("👉 Please make sure password includes an uppercase letter 👈.")
        }
        else if (!number.test(password)) {
            return setError("👉 Please make sure Password Includes a digit/number 👈")


        }
        else if (password !== confirmPassword) {
            return setError("👉 Please make sure passwords match.👈!")

        }
        else {
            setSuccess("You are success Registration 👍👍")
        }

        // Click clickSingUpBtn btn submition
        //createUser information
        creatUser(email, password)
            .then(result => {
                const user = result?.user;
                console.log(user)
                setTimeout(() => {
                    navigat('/login')
                }, 1500);
                //Update User Name
                upDateUser(name)
                    .then(() => {
                    })
                    .catch(error => {
                        console.log(error);
                    });

            })
            .catch(error => console.error(error))

    }

    //google auto log in part
    const googleBtnAutoLogIn = () => {
        googleAutoLogIn()
            .then(restult => {
                console.log('your are success Auto logIn in Google');
                navigat('/courses')
            }).catch(error => console.log(error))
    }
    //Ghithub auto log in part




    return (
        <>
            <div className='reGistration flex justify-center items-center pt-5 mx-5 mt-16'>
                <div className='flex flex-col max-w-md  rounded-md sm:px-10 px-7 sm:py-3 py-1 bg-gray-100 text-gray-900'>
                    <div className='mb-3 text-center'>
                        <h1 className='mb-1 mt-1 text-4xl font-bold text-gray-900'><span className='text-amber-700'>Re</span>gister</h1>
                        <p className='text-sm text-gray-400'>Create a new account</p>
                    </div>
                    <form onSubmit={handelSubmitbtn}
                        noValidate=''
                        action=''
                        className='space-y-1 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-3'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                    required />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                    required />
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label htmlFor='password' className='text-sm'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='Password'
                                    id='password'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                    required />
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label htmlFor='confirm' className='text-sm'>
                                        Confirm-password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='cPasswor'
                                    id='password'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                    required />
                            </div>
                            <p className='text-center text-red-400 text-xs pb-1'>{error}</p><p className='text-center text-green-500 text-xs pb-1'>{successRegistion}</p>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div className='flex justify-center space-x-4'>

                        <button onClick={googleBtnAutoLogIn} aria-label='Log in with Google' className='p-3 rounded-sm'>
                            <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
                        </button>

                        <button aria-label='Log in with Facbook' className='p-3 rounded-sm'>
                            <h1 className='text-3xl text-blue-700'><FaFacebook></FaFacebook></h1>
                        </button>

                        <button id='githubsss' aria-label='Log in with GitHub' className='p-3 rounded-sm'>
                            <h1 className='text-2xl'><FaGithub></FaGithub></h1>
                        </button>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400 pb-3'>
                        Already have an account yet?{' '}
                        <Link to='/login' href='#' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default Registrar;