import React, { useState } from 'react';

const AboutDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h3 className="text-5xl font-semibold mb-6">About Men's Prince Coats & Sherwanis</h3>
      
      {/* Collapsible Text Section */}
      <div className={`${isExpanded ? '' : 'max-h-44 overflow-hidden'} transition-all duration-300 text-3xl `}>
        <p className="mb-6 text-2xl">
          Step into timeless elegance with our curated Sherwanis and Prince Coats from the &nbsp;
          <a href="https://pk.sapphireonline.pk/collections/mens-stitched" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-blue-600 font-semibold hover:underline text-2xl">
            Men’s Stitched – Festive Collection’24
          </a>&nbsp;, curated for the modern man who values tradition. Each piece in this collection is a celebration of classic aesthetics, perfect for formal events, weddings, and festive occasions. Our sherwanis boast intricate thread details, luxurious fabrics, and striking silhouettes for a full-length one-stop fashion fix.
        </p>
        <p className="mb-6 text-2xl">
          If you're looking for a sophisticated yet simpler layer to bring your &nbsp;
          <a href="https://pk.sapphireonline.pk/collections/kurta-shalwar" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-blue-600 font-semibold hover:underline text-2xl">
            shalwar kameez
          </a> &nbsp;
          a notch up, the Prince Coat is a better pick.
        </p>
        <p className="mb-6 text-2xl">
          Decide from diverse fabrics, selected by experts to suit all seasonal and style preferences. The Cotton Schiffli fabric, renowned for its comfort and breathability, ensures you stay cool and engaged throughout any celebration. For those who seek a bit more texture and depth in their wardrobe, the collection offers Velvet and Jamawar fabric alternatives, known for their shimmery and luxurious feel, bound to add an exquisite touch to your formal outfit.
        </p>
        <p className='text-2xl'>
          So, whether you prefer elaborate textures or modern cuts, our festive range ensures you are always ready to make a bold statement. Shop SAPPHIRE online and in-person clothing stores to find a stunning range of Prince Coats and Sherwanis that capture the latest trends in men's fashion!
        </p>
      </div>

      {/* Show More/Show Less Button */}
      <button
        onClick={handleToggle}
        className="mt-6 font-semibold uppercase text-xl text-gray-700 hover:text-gray-500"
      >
        {isExpanded ? '(Show Less)' : '(Show More)'}
      </button>
    </div>
  );
};

export default AboutDescription;
