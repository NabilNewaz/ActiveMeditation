import { Card } from 'flowbite-react';
import React from 'react';
import './Meditationsteps.css'

const Meditationsteps = () => {
    return (
        <div>
            <div>
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <div>
                        <p>For Age : <span className='font-bold'>20-25</span></p>
                        <p>Time required : <span className='font-bold'>30s</span></p>
                    </div>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                        Add to list
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default Meditationsteps;