import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from 'flowbite-react';
import React from 'react';

const Userinfo = () => {
    return (
        <div className='sticky top-8 m-8'>
            <div>
                <Avatar
                    img="profile-picture.png"
                    rounded={true}>
                    <div className="space-y-0.1 font-medium dark:text-white">
                        <div>
                            Nabil Newaz
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <FontAwesomeIcon className='mr-1' icon={faLocationDot} />Dhaka, Bangladesh
                        </div>
                    </div>
                </Avatar>
            </div>
            <div className='mt-5'>
                <div className='flex justify-between bg-blue-100 px-6 py-2 rounded-md'>
                    <div>
                        <h3><span className='text-2xl font-bold text-black'>75</span><span className='text-gray-500 text-1xl'>kg</span></h3>
                        <p className='text-center text-gray-800'>Weight</p>
                    </div>
                    <div>
                        <h3><span className='text-2xl font-bold text-black'>6.5</span><span className='text-gray-500 text-1xl'>fit</span></h3>
                        <p className='text-center text-gray-800'>Height</p>
                    </div>
                    <div>
                        <h3><span className='text-2xl font-bold text-black'>25</span><span className='text-gray-500 text-1xl'>yrs</span></h3>
                        <p className='text-center text-gray-800'>Age</p>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <h3 className='text-xl font-medium'>Add A Break</h3>
                <div className='flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-2'>
                    <button className="h-10 w-10 bg-white rounded-full">10s</button>
                    <button className="h-10 w-10 bg-blue-600 text-white rounded-full">20s</button>
                    <button className="h-10 w-10 bg-white rounded-full">30s</button>
                    <button className="h-10 w-10 bg-white rounded-full">40s</button>
                    <button className="h-10 w-10 bg-white rounded-full">50s</button>
                </div>
            </div>
            <div className='mt-6'>
                <h3 className='text-xl font-medium'>Exercise Details</h3>
                <div className='flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-3'>
                    <p><span className='font-bold'>Exercise time</span></p>
                    <p><span id='exerciseTime' className='text-gray-500'>0 seconds</span></p>
                </div>
                <div className='flex justify-between bg-blue-100 px-5 py-3 rounded-md mt-3'>
                    <p><span className='font-bold'>Break time</span></p>
                    <p><span id='breakTime' className='text-gray-500'>15 seconds</span></p>
                </div>
            </div>
            <button
                type="button"
                className="mt-5 inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-4 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                Activity Completed
            </button>
        </div>
    );
};

export default Userinfo;