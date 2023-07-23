import React from 'react';
import Stackedbarchart from './Chart';

const Middle = () => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg '>
            <div className='text-blue-500 font-bold  my-3'>
                Retirement Income
            </div>
            <div className='text-2xl font-bold font-sans mb-5 mx-3 my-3'>
                Starting Year 2056
            </div>

            <div className='grid grid-cols-3 gap-4 mx-2 my-3'>
                <div className='flex flex-col '>
                    <div className='font-bold text-xl'>
                        $300,000
                    </div>
                    <div className='text-sm'>
                        My Goal
                    </div>
                    <hr className='border-t-2 border-blue-500 my-4' />
                </div>
                <div className='flex flex-col '>
                    <div className='font-bold text-xl'>
                        59%
                    </div>
                    <div className='text-sm '>
                        Goal Achieved
                    </div>
                    <hr className='border-t-2 border-blue-500 my-4' />
                </div>
                <div className='flex flex-col w-5/6'>
                    <div className='font-bold text-xl'>
                        $300
                    </div>
                    <div className='text-sm '>
                        Est. Monthly Income
                    </div>
                    <hr className='border-t-2 border-blue-500 my-4' />
                </div>
            </div>
            <div className='font-bold mt-2 mx-3 my-3' >
                Contributions Overtime
            </div>
            <Stackedbarchart />
        </div>
    );
};

export default Middle;
