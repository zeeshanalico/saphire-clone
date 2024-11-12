import React from 'react';
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
} from 'react-icons/hi';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Contact Us Section */}
                    <div className='col-span-2'>
                        <h3 className="text-3xl font-semibold  mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-2">
                                <HiOutlineLocationMarker className="w-6 h-6 text-gray-700" />
                                <span className="text-xl">
                                    Sapphire Retail Head Office <br />
                                    1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road,
                                    Lahore.
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <HiOutlineMail className="w-6 h-6 text-gray-700" />
                                <a
                                    href="mailto:wecare@sapphireonline.pk"
                                    className="text-xl text-gray-600 hover:underline"
                                >
                                    wecare@sapphireonline.pk
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <HiOutlinePhone className="w-6 h-6 text-gray-700" />
                                <span className="text-xl">+92(0)42 111-738-245</span>
                            </div>
                        </div>
                    </div>

                    {/* Customer Care Section */}
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Customer Care</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    Privacy Policy

                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    SafePay Guide

                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    Payments
                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    Store Locator

                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    Fabric Glossary

                                </a>
                            </li>
                            <li>
                                <a href="/pages/contact-us" className="text-xl text-gray-700 hover:text-gray-400">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Information */}
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/pages/exchange-return-policy"
                                    className="text-xl text-gray-700 hover:text-gray-400"
                                >
                                    Exchange & Return Policy
                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="/pages/faqs" className="text-xl text-gray-700 hover:text-gray-400">
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                    </div>

                    {/* Social Media Section */}
                    <div className='text-2xl col-span-2'>
                        <h3 className="text-3xl font-semibold mb-6">Newsletter Signup</h3>
                        <p className="text-2xl mb-6">
                            Subscribe to our newsletter for exclusive updates!
                        </p>
                        <form className="flex items-center space-x-4">
                            <div className="relative flex-grow">
                                <input
                                    type="email"
                                    className="w-full py-4 px-4 text-xl border border-black  rounded-xl focus:outline-none bg-transparent"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="absolute  text-xl px-5 right-2 top-1/2 transform -translate-y-1/2 bg-black text-white py-3 rounded-xl hover:bg-indigo-400-500 focus:outline-none focus:ring-2 "
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <div className="flex space-x-6 mt-6">
                            <a
                                href="https://www.facebook.com/sapphireofficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <FaFacebookF className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/sapphirepakistan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-pink-500 transition-colors"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-400 transition-colors"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                <FaLinkedinIn className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer2/>
        </footer>
    );
};

export default Footer;


const Footer2 = () => {
    return (
        <div
            className="pt-10"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
                {/* Left Section - Copyright */}
                <div className="text-center md:text-left">
                    <span className=" text-gray-700 text-xl">
                        &copy; COPYRIGHT 2024{' '}
                        <span className="font-semibold text-xl">SAPPHIRE</span>
                    </span>
                </div>

                {/* Right Section - Payment Icons */}
                <div className="flex items-center justify-center md:justify-end space-x-4">
                    <img
                        src="https://cdn.shopify.com/s/files/1/1592/0041/files/online_payment_icons-03.svg?v=1730184803"
                        alt="Payment Icon"
                        className="w-20"
                    />
                    <img
                        src="https://cdn.shopify.com/s/files/1/1592/0041/files/online_payment_icons-01.svg?v=1730184802"
                        alt="Payment Icon"
                        className="w-36"
                    />
                    <img
                        src="https://cdn.shopify.com/s/files/1/1592/0041/files/online_payment_icons-02.svg?v=1730184802"
                        alt="Payment Icon"
                        className="w-36"
                    />
                </div>
            </div>
        </div>
    );
};

