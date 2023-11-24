import React, { useState } from 'react'
import Logimg from '/assets/login.png'
import { useDispatch } from 'react-redux'
import { Loginuser } from '../Redux/Actions/Apicall'
const Login = () => {
    const dispatch = useDispatch()
    const [formval, setformval] = useState({})

    const setval = (e) => {
        let name = e.target.name
        let val = e.target.value
        setformval({ ...formval, [name]: val })
    }

    const submit = (e) => {
        e.preventDefault()
        Loginuser(formval, dispatch)
    }
    return (
        <div>
            <div className='h-[100vh] bg-main flex items-center'>

                <div className='bg-white bg-opacity-20 border-1 w-[90%] lg:w-[70%] py-[40px] m-auto'>
                    {/* heading */}
                    <h1 className='flex justify-center text-[42px] text-mustard mb-5'>
                        Login
                    </h1>
                    <div className='flex md:flex-row w-full flex-col m-auto justify-between items-center'>

                        {/* Left Section */}

                        <div className='flex justify-center gap-4 flex-col flex-1 items-center w-full lg:w-[55%] md:border-r-2'>

                            {/* form */}

                            <form onSubmit={submit} className='flex flex-col gap-4  justify-center items-center'>
                                <input type="email"
                                    name='email'
                                    value={formval.email}
                                    onChange={setval}
                                    className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg '
                                    placeholder='Enter Your Email' required
                                />
                                <input
                                    type="password"
                                    name='pass'
                                    value={formval.pass}
                                    onChange={setval}
                                    className=' bg-transparent border-2 p-[5px_10px] text-center outline-none text-white w-[280px] rounded-lg '
                                    placeholder='Enter Your Password' required
                                />
                                <button type='submit' className=' bg-main flex justify-center p-[10px_40px] rounded-[50px] text-white'>Sign in</button>
                            </form>


                            {/* login with options  */}
                            <div className='flex gap-x-3'>
                                <div className='cursor-pointer ' >Google</div>
                                <div className='cursor-pointer '>Github</div>
                            </div>

                            {/* Signup page link For mobile */}
                            <div className='text-white md:hidden'>
                                Do You Want to ? <button className='text-blue-300 ' >Sign Up</button>
                            </div>
                        </div>

                        {/* Right Section */}

                        <div className='md:flex flex-col justify-center items-center w-[45%] flex-2 animate-[Bounce_2s_infinite_ease_alternate] hidden'>
                            <img className='w-full ' src={Logimg} alt="" srcSet={Logimg} />

                            <div className='text-white md:flex hidden'>
                                Do You Want to ? <button className='text-blue-300 ' >Sign Up</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login