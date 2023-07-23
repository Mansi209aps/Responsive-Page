import React from 'react';

export default function First() {
    return (
        <div className='max-w-sm rounded overflow-hidden lg:h-full shadow-lg bg-gray-100 m-2 p-2 rounded-lg'>
            <div className='flex items-center m-5'>
                <img
                    className="object-cover w-20 h-20 rounded-full shadow"
                    src="https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                />
                <div className='ml-4 m-4'>
                    <div className='text-3xl font-serif font-bold'>Hi Mike,</div>
                    <div className='text-xs font-serif'>welcome back.</div>
                </div>
            </div>

            <div className='mb-2 m-5'>
                <div className='font-bold font-serif mt-4'>
                    Today
                </div>
                <div className='text-2xl font-bold'>
                    $19,892
                </div>
            </div>

            <div className='mb-4 m-5'>
                <div className='text-xs'>
                    Account Balance
                </div>
                <div className='font-bold'>
                    $4,000
                </div>
            </div>

            <div className='mb-4 m-5'>
                <div className='text-xs'>
                    Year-to-Date Contributions
                </div>
                <div className='font-bold'>
                    $1,892
                </div>
            </div>

            <div className='mb-4 m-5'>
                <div className='text-xs'>
                    Total Interest
                </div>
                <div className='font-bold'>
                    $892
                </div>
            </div>

            <div className='mb-4 m-5'>
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center">
                    <span>I want to</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>

            <div className='mb-4 m-5'>
                <div className='font-bold mt-4'>
                    Recent Transactions
                </div>
                <div className='text-xs mt-2'>
                    2020-08-07
                </div>
                <div className='font-bold mt-4'>
                    Withdrawal Transfer to Bank-XXX11
                </div>
                <div className='text-xs mt-2'>
                    2020-07-21
                </div>
                <div className='font-bold mt-4'>
                    Withdrawal Transfer to Bank-XXX11
                </div>
                <div className='text-xs mt-2'>
                    2020-07-21
                </div>
                <div className='font-bold mt-4'>
                    Withdrawal Transfer to Bank-XXX11
                </div>
            </div>
        </div>
    );
}
