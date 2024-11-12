import { Bag } from "../../public/icon";
const ProductCard = ({
    id,
    title,
    category,
    price,
    tag,
    imageSrc,
    hoverImageSrc,
}) => {
    return (
        <div className="group relative  overflow-hidden bg-white transition hover:shadow-xl">
            <div className="relative">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-auto object-cover transition duration-300 group-hover:opacity-0"
                />
                <img
                    src={hoverImageSrc}
                    alt={`${title} Hover`}
                    className="absolute inset-0 w-full h-auto object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                />
            </div>

            <div className="flex flex-row"> 
                <div className="mt-3 p-3">
                    <h3 className="text-gray-800 text-lg font-semibold truncate">{title}</h3>
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-600 capitalize py-1 mb-1">{category}</p>
                    </div>
                    <p className=" text-gray-600 bg-tag uppercase inline px-2 py-1 mb-1">{tag}</p>
                    <p className="text-xl  text-black py-1">Rs. {price.toLocaleString()}</p>
                </div>
                <div className="m-auto">
                    <button className="group py-9 relative overflow-hidden bg-white hover:bg-black font-semibold  px-6 rounded-lg transition-all duration-1000 w-60">
                        <span className="absolute inset-0 text-white flex items-center justify-center transition-transform duration-600 group-hover:-translate-y-full">
                            Add to Cart
                        </span>
                        <Bag fill="white" className="absolute inset-0 w-10 h-10 m-auto  items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-1000" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
