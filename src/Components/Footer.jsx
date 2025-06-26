import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full border-t bg-amber-100 text-gray-800'>
     
      <div className='flex flex-col items-center gap-4 py-8 px-4'>
        <h1 className='font-bold text-2xl'>MediCare</h1>
        <p className='text-lg font-medium text-center'>
          Stay Healthy with Our Newsletter
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-2'>
          <input
            type="email"
            placeholder='Enter your email'
            className='border px-4 py-2 rounded-md outline-none w-64'
          />
          <button className='bg-purple-700 px-4 py-2 text-white rounded-md hover:bg-purple-800'>
            Subscribe
          </button>
            
        </div>
      </div>

      
      <div className='w-full flex justify-between items-center px-4 py-3  text-sm'>
        <button className='text-gray-600 hover:underline'>English</button>
        <p className='text-gray-500'>&copy; {new Date().getFullYear()} MediCare</p>
        <div className='flex gap-3'>
                <FaFacebookF/>
                <FaTwitter />
                <FaInstagram/>
                <FaLinkedinIn/>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
