import React from 'react';
import Navbar from './Navbar';
import Middle from './Middle';
import Last from './Last';
import First from './First';
import Stackedbarchart from './Chart';

const Final = () => {
    return (
        <div className='flex flex-col md:flex-row w-100'>
            {/* Navbar will be horizontally aligned in a row on small screens */}
            <div className='hidden md:flex md:flex-col'>
                <Navbar />
            </div>
            <div className='flex flex-col md:flex-row sm:w-full'>
                <div className='w-4/5  mr-3 my-3'>
                    <First />
                </div>
                <div>
                    <div className=' flex justify-center my-5'>
                        {/* Use flex justify-center to center the Middle component */}
                        <Middle />
                    </div>
                </div>
                <div className='w-4/5 mx-5 my-5'>
                    <Last />
                </div>
            </div>
            {/* Navbar will be vertically aligned in a column on medium and larger screens */}
            <div className='md:hidden'>
                <Navbar />
            </div>
        </div>
    );
};

export default Final;