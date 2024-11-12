import React from 'react';
import { Bag, Person, Truck, Filter, Search, ChevronLeft, ChevronRight } from '../../public/icon';
import FeaturedProducts from './FeaturedProducts';

const Header = () => {
    const categories = [
        "NEW IN",
        "WOMAN",
        "MAN",
        "KIDS",
        "BEAUTY",
        "ACCESSORIES",
        "HOME",
        "SPECIAL OFFERS",
        "THE EDIT"
    ];
    
   
    

    return (
        <>
            {/* header 1 */}
            <div className="flex items-center p-8 m-5 border-b border-gray-200">
                <p className="text-7xl font-bold text-center uppercase tracking-widest basis-1/4">
                    Sapphire
                </p>
                <div className="relative basis-2/4 flex justify-center">
                    <input
                        type="text"
                        className="border border-gray-200 text-xl text-gray-700 rounded-2xl outline-none w-full p-4 h-20"
                        placeholder="FIND YOUR FAVOURITES"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-500 cursor-pointer" />
                </div>
                <div className="flex items-center gap-6 ml-auto p-10">
                    <Truck className="w-10 h-10 cursor-pointer hover:text-gray-500 transition-all duration-200" />
                    <Person className="w-10 h-10 cursor-pointer hover:text-gray-500 transition-all duration-200" />
                    <Bag className="w-10 h-10 cursor-pointer hover:text-gray-500 transition-all duration-200" />
                </div>
            </div>

            {/* header 2 */}
            <div className="flex justify-around px-48 overflow-x-auto">
                {categories.map((category, index) => (
                    <div key={index} className="text-2xl text-gray-90000 hover:text-gray-400 cursor-pointer">
                        {category}
                    </div>
                ))}
            </div>

            {/* header 3 */}
            <FeaturedProducts/>
        </>

    );
};

export default Header;
