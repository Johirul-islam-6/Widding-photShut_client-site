import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UseContext';


const Header = () => {
    //import userContext(AuthContext)
    const { user, userLogOut } = useContext(AuthContext)

    const logoutBtn = () => {
        userLogOut()
            .then(() => console.log("user Log out!"))
            .catch(error => console.log(error))
    }

    return (
        <>

            <div className="navbar bg-slate-700 lg:px-10">
                {/* -------------navbar start------------ */}
                <div className="navbar-start ">
                    {/* ---------logo show lg:--------- */}
                    <div className='hidden lg:block'>
                        <div className='flex'>
                            <Link to='/' className=" normal-case text-xl w-10">
                                <img className='w-10' src="" alt="" />
                            </Link>
                            <Link to='/' className='mx-1 flex items-center font-bold text-2xl text-amber-500'>Widding<span className='text-white'>Phots</span></Link>
                        </div>
                    </div>
                    {/* ------droup down -------------- */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="lg-header hiside menu menu-compact dropdown-content  p-2  shadow bg-slate-700  rounded-box w-60  lg:hidden">
                            <Link to='/' className='btn mx-6'>Home</Link>
                            <Link to='/about' className='btn'>About</Link>

                            {
                                user?.uid ? <>

                                    <Link to='/my-reviews' className='btn mx-4'>My reviews</Link>
                                    <Link to='/add-service' className='btn '>Add service</Link>
                                    <Link to='/' onClick={logoutBtn} id='logout' className='btn mx-4'>Log out</Link>
                                </>

                                    : <>
                                        <Link to='/registrar' className='btn mx-6'>Registrar</Link>
                                        <Link to='/login' className='btn'>Login</Link>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
                {/* ---------------navbar-Center ----------- */}
                <div className="navbar-center">
                    {/* ---------logo show md or small--------- */}
                    <div className='flex justify-start  lg:hidden'>
                        <Link to='/' className=" normal-case text-xl w-8 sm:w-6">
                            <img className=' w-10 imates' src="" alt="" />
                        </Link><Link to='/' className='logo-text lg:mx-1 flex items-center font-bold text-2xl text-amber-500'>Widding<span className='text-white'>Photo</span></Link>
                    </div>
                </div>
                {/* -----------navbar-end text btn section--------- */}
                <div className="navbar-end">

                    <div className="hidden lg:block mr-5">

                        <ul className="lg-header menu menu-horizontal p-0">
                            <Link to='/' className='btn '>Home</Link>
                            <Link to='/education' className='btn mx-6'>Education</Link>
                            <Link to='/block' className='btn '>Block</Link>

                            {
                                user?.uid ? <>

                                    <Link to='/my-reviews' className='btn mx-4'>My reviews</Link>
                                    <Link to='/add-services' className='btn '>Add service</Link>
                                    <Link to='/' onClick={logoutBtn} id='logout' className='btn mx-4'>Log out</Link>
                                </>

                                    : <>
                                        <Link to='/registrar' className='btn mx-6'>Registrar</Link>
                                        <Link to='/login' className='btn'>Login</Link>
                                    </>
                            }



                        </ul>
                    </div>


                    {/* ----------you profile start----------- */}


                    <div id='avatar' className="avatar online placeholder mr-2 ">
                        <div className="w-7 rounded-full ring ring-primary
                         ring-offset-base-100 ring-offset-2">
                            {
                                user?.uid ?
                                    <img className='w-6 bg-slate-300' src={user?.photoURL} />
                                    :
                                    <img className='w-6 bg-slate-300' src="https://placeimg.com/192/192/people" />
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Header;