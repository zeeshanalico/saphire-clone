import React from 'react'
import { useRef ,useState,} from 'react';
import { ChevronLeft,ChevronRight } from '../../public/icon';

const FeaturedProducts = () => {
    const products = [
        {
          name: "Winter '24",
          imageSrc: "https://cdn.shopify.com/s/files/1/1592/0041/files/winter-_24_6c4383df-fed0-420f-aaf6-e3e146239ad7.jpg?v=1730973188",
          link: "/collections/mens-stitched-winter-24"
        },
        {
          name: "Festive",
          imageSrc: "https://cdn.shopify.com/s/files/1/0026/9238/2780/files/menswear_festive.jpg?v=1726132979",
          link: "/collections/man-stitched-festive-24"
        },
        {
          name: "Kurtas",
          imageSrc: "https://cdn.shopify.com/s/files/1/1592/0041/files/kurtas_c713a7ce-1c3c-4d06-8955-4d69cf18266d.jpg?v=1730973188",
          link: "/collections/kurtas"
        },
        {
          name: "Outfits",
          imageSrc: "https://cdn.shopify.com/s/files/1/1592/0041/files/outfits_8f81e3bc-4d9c-4764-b045-5519971c699c.jpg?v=1730973188",
          link: "/collections/kurta-shalwar"
        },
        {
          name: "WaistCoat",
          imageSrc: "https://cdn.shopify.com/s/files/1/1592/0041/files/waistcoats_703a6e90-f994-425e-b818-f69ae8c1aa23.jpg?v=1730973188",
          link: "/collections/waistcoats"
        },
        {
          name: "Prince Coats & Sherwanis",
          imageSrc: "https://cdn.shopify.com/s/files/1/0026/9238/2780/files/sherwanis.jpg?v=1726132979",
          link: "/collections/prince-coat-and-sherwanis"
        },
        {
          name: "Bottoms",
          imageSrc: "https://cdn.shopify.com/s/files/1/1592/0041/files/Bottoms_ec4f3254-6617-484a-9eca-163389f1530e.jpg?v=1715853724",
          link: "/collections/men-s-bottoms"
        }
      ];
      
    const productListRef = useRef(null);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const scrollProducts = (direction) => {

        const scrollAmount = productListRef.current?.offsetWidth || 0;
        const currentScroll = productListRef.current?.scrollLeft || 0;

        if (direction === 'right') {
            productListRef.current?.scrollTo({ left: currentScroll + scrollAmount, behavior: 'smooth' });
        } else if (direction === 'left') {
            productListRef.current?.scrollTo({ left: currentScroll - scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className='flex flex-row py-20'>
            <div className='basis-2/9 uppercase text-5xl text-center self-center font-semibold p-10'>{selectedProduct.name}</div>
            <div className='basis-7/9 container mx-10 overflow-x-auto'>
                {/* <div className="mx-auto px-4"> */}
                <div className="relative border-spacing-x-5 border-green-600">
                    <button
                        onClick={() => scrollProducts('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition"
                    >
                        <ChevronLeft className='h-10 w-10 hover:text-gray-500' />
                    </button>
                    <div
                        ref={productListRef}
                        className="flex space-x-6 container overflow-x-auto no-scrollbar py-2 "
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {products.map((product, index) => (
                            <div key={index} onClick={() => setSelectedProduct(product)} className="bg-white p-6 transition duration-300 text-center flex-shrink-0 w-60">
                                <div className="w-44 h-44  mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-4xl">
                                    <img src={product.imageSrc} alt={product.name} className=" rounded-full w-full h-40 object-cover " />
                                    </span>
                                </div>
                                <p className="text-gray-600 text-2xl">{product.name}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => scrollProducts('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition"
                    >
                        <ChevronRight className='h-10 w-10 hover:text-gray-500' />
                    </button>
                </div>
            </div>
        </div>)
}

export default FeaturedProducts