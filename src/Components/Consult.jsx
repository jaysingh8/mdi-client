import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Consult = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1010px)' });

    return (
        isDesktop ? (
            // Desktop View
            <div className='m-5 bg-purple-200 h-80 rounded-md flex flex-col gap-2 justify-center items-center'>
                <div className='w-2xl text-center flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold font-serif'>Consult a Doctor Online</h1>
                    <p className='text-gray-700 font-serif'>
                        Connect with qualified and experienced doctors online from the comfort of
                        your home. Get personalized consultations and expert medical advice anytime,
                        anywhere.
                    </p>
                </div>
                <Link to="/doctor" className='px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
                    Consult Now
                </Link>
            </div>
        ) : (
            // Mobile View
            <div className='m-4 bg-purple-100 p-4 rounded-md flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-2xl font-bold font-serif text-center'>Doctor Consultation</h1>
                <p className='text-gray-700 font-serif text-center'>
                    Talk to doctors online from your mobile. Fast, easy and secure medical advice from home.
                </p>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
                    Start Now
                </button>
            </div>
        )
    );
};

export default Consult;
