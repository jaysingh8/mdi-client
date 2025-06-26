import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../service/CartContext'

const NavBar = () => {
    const navigate = useNavigate()
    const isDesktop = useMediaQuery({ query: '(min-width: 1010px)' });
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart()
    const handleLogout = () => {
  
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  navigate("/")

     
    }
    return (
        <>
            {isDesktop ? (
                //--------------Desktop view-------------------------
                <div className='w-full bg-white shadow flex justify-between items-center px-2 py-2'>
                    {/* Left navbar */}
                    <div className='flex justify-center gap-5'>
                        <div className="log px-2 py-2">
                            <h1>Mediacre</h1>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <Link to="/home" className='px-2 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>Home</Link>
                            <Link to="/product" className='px-2 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>Shop</Link>
                            <Link to="/contact" className='px-2 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>Contact</Link>
                            <Link to="/doctor" className='px-2 py-2 rounded-md hover:bg-black hover:text-white cursor-pointer'>Consult a Doctor</Link>

                        </div>
                    </div>

                    {/* Right navbar */}
                    <div className='flex justify-center pr-3'>
                        
                        <div className='rounded-sm flex justify-center items-center px-2 py-2 gap-6'>
                            <Link to="/cart" className='flex'>
                                <ShoppingCart size={30} />
                                {cartCount > 0 && (
                                    <sup className='w-6 h-6 flex justify-center items-center bg-red-500  border rounded-full'>
                                        {cartCount}
                                    </sup>
                                )}
                            </Link>
                            <Link to="/user">
                                <User size={30} values='User' />
                            </Link>
                            <button onClick={handleLogout}>Logo Out</button>


                        </div>
                    </div>
                </div>
            ) : (
                // ---------------------Mobile View----------------------
                <>
                    <div className='w-full bg-white shadow flex justify-between items-center px-2 py-2 gap-2'>
                        <div className="log px-2 py-2">
                            <h1>Mediacre</h1>
                        </div>


                        <button onClick={() => setIsOpen(true)} className="md:hidden p-4">
                            <Menu size={28} />
                        </button>
                    </div>
                    
                    {/* Overlay */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-40 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                    )}

                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 transform ${isOpen ? '-translate-x-0' : 'translate-x-64'
                            } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-lg font-bold">Menu</h2>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <ul className="p-4 space-y-4">
                            <li><Link to="/home" className='block' onClick={() => setIsOpen(false)}>Home</Link></li>
                            <li><Link to="/product" className='block' onClick={() => setIsOpen(false)}>Shop</Link></li>
                            <li><Link to="/contact" className='block' onClick={() => setIsOpen(false)}>Contact</Link></li>
                            <li><Link to="/doctor" className='block' onClick={() => setIsOpen(false)}>Consult a Doctor</Link></li>
                            
                            <Link to="/cart" onClick={() => setIsOpen(false)}>
                                <ShoppingCart size={20} />
                            </Link>
                            <li className="flex items-center mt-6">
                                <Link to="/user" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsOpen(false)}>
                                    <User size={20} />
                                    <span>User</span>
                                </Link>
                            </li>




                        </ul>

                    </div>
                </>
            )}
        </>
    );

}

export default NavBar
