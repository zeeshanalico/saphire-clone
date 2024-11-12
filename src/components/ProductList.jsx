import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  // Step 1: Define an array of products
  const products = [
    {
      id: 7812177068108,
      title: "1 Piece - Digital Printed Lawn Shirt",
      category: "Ready to Wear",
      price: 2490,
      tag: "limited",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_2.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_3.jpg?v=1730289104&width=1024",
      link: "/collections/ready-to-wear/products/u3p-dy24v9-23-1",
    },
    {
      id: 7812177068106,
      title: "3 Piece - Printed Cotton Jacquard Suit",
      category: "Unstitched Winter ’24",
      price: 4590,
      tag: "new in",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V921_6.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V921_3.jpg?v=1730289104&width=1024",
      link: "/collections/unstitched/products/u3p-dy24v9-21-1",
    },
    {
      id: 7812177068107,
      title: "2 Piece - Embroidered Lawn Suit",
      category: "Unstitched Summer ’24",
      price: 3890,
      tag: "bestseller",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V922_6.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V922_3.jpg?v=1730289104&width=1024",
      link: "/collections/unstitched/products/u3p-dy24v9-22-1",
    },
    {
      id: 7812177068108,
      title: "1 Piece - Digital Printed Lawn Shirt",
      category: "Ready to Wear",
      price: 2490,
      tag: "limited",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_2.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_3.jpg?v=1730289104&width=1024",
      link: "/collections/ready-to-wear/products/u3p-dy24v9-23-1",
    },
    {
      id: 7812177068106,
      title: "3 Piece - Printed Cotton Jacquard Suit",
      category: "Unstitched Winter ’24",
      price: 4590,
      tag: "new in",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V921_6.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V921_3.jpg?v=1730289104&width=1024",
      link: "/collections/unstitched/products/u3p-dy24v9-21-1",
    },
    {
      id: 7812177068107,
      title: "2 Piece - Embroidered Lawn Suit",
      category: "Unstitched Summer ’24",
      price: 3890,
      tag: "bestseller",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V922_6.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V922_3.jpg?v=1730289104&width=1024",
      link: "/collections/unstitched/products/u3p-dy24v9-22-1",
    },
    {
      id: 7812177068108,
      title: "1 Piece - Digital Printed Lawn Shirt",
      category: "Ready to Wear",
      price: 2490,
      tag: "limited",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_2.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_3.jpg?v=1730289104&width=1024",
      link: "/collections/ready-to-wear/products/u3p-dy24v9-23-1",
    },
    {
      id: 7812177068106,
      title: "3 Piece - Printed Cotton Jacquard Suit",
      category: "Unstitched Winter ’24",
      price: 4590,
      tag: "new in",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V921_6.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V921_3.jpg?v=1730289104&width=1024",
      link: "/collections/unstitched/products/u3p-dy24v9-21-1",
    },
    {
      id: 7812177068108,
      title: "1 Piece - Digital Printed Lawn Shirt",
      category: "Ready to Wear",
      price: 2490,
      tag: "limited",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_2.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_3.jpg?v=1730289104&width=1024",
      link: "/collections/ready-to-wear/products/u3p-dy24v9-23-1",
    },
    {
      id: 7812177068107,
      title: "2 Piece - Embroidered Lawn Suit",
      category: "Unstitched Summer ’24",
      price: 3890,
      tag: "bestseller",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V922_6.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V922_3.jpg?v=1730289104&width=1024",
      link: "/collections/unstitched/products/u3p-dy24v9-22-1",
    },
    {
      id: 7812177068108,
      title: "1 Piece - Digital Printed Lawn Shirt",
      category: "Ready to Wear",
      price: 2490,
      tag: "limited",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_2.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_3.jpg?v=1730289104&width=1024",
      link: "/collections/ready-to-wear/products/u3p-dy24v9-23-1",
    },
    {
      id: 7812177068108,
      title: "1 Piece - Digital Printed Lawn Shirt",
      category: "Ready to Wear",
      price: 2490,
      tag: "limited",
      imageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_2.jpg?v=1730289104&width=1024",
      hoverImageSrc: "//pk.sapphireonline.pk/cdn/shop/files/0U3PDY24V923_3.jpg?v=1730289104&width=1024",
      link: "/collections/ready-to-wear/products/u3p-dy24v9-23-1",
    },  
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          tag={product.tag}
          imageSrc={product.imageSrc}
          hoverImageSrc={product.hoverImageSrc}
          link={product.link}
        />
      ))}
    </div>
  );
};

export default ProductList;
