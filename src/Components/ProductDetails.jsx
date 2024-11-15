import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { useCartWishlist } from './CartWishlistContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart, addToWishlist } = useCartWishlist(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        fetch('/gadget.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const productDetails = data.find(item => item.product_id === id);
                if (productDetails) {
                    setProduct(productDetails);
                } else {
                    throw new Error('Product not found');
                }
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex items-center">
                {Array(fullStars).fill(<FaStar className="text-yellow-500" />)}
                {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
                {Array(emptyStars).fill(<FaStar className="text-gray-300" />)}
            </div>
        );
    };

    const handleAddToCart = () => {
        setIsInCart(true);
        toast.success(`Added ${product.product_title} to cart.`, {
            position: "top-center"
        });
        addToCart(product);
    };

    const handleAddToWishlist = () => {
        setIsInWishlist(true);
        toast.warn(`Added ${product.product_title} to wishlist.`, {
            position: "top-center"
        });
        addToWishlist(product);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className='bg-white rounded-2xl grid lg:grid-cols-2 grid-cols-1 lg:w-[70%] w-[90%] mx-auto p-8 mt-[-250px] mb-[100px] gap-5'>
            <Helmet>
                <title>Product Details | Gadget Heaven</title>
            </Helmet>
            <img className='w-full h-full rounded-2xl border' src={product.product_image} alt={product.product_title} />
            <div className='flex flex-col gap-2'>
                <p className='text-[28px] font-[600]'>{product.product_title}</p>
                <p className='text-[20px] font-[600]'>Price: $ {product.price}</p>
                <p className='btn w-fit rounded-3xl border-green-500 text-green-500'>{product.availability ? "In Stock" : "Out of Stock"}</p>
                <p className='text-[18px] font-[400]'>{product.description}</p>
                <h3 className='text-[18px] font-[700]'>Specification:</h3>
                <ol className='list-decimal pl-8 space-y-2'>
                    {product.Specification.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ol>
                <p className='text-[18px] font-[700]'>Rating:</p>
                <p className='flex items-center gap-2'>{renderStars(product.rating)}<button className='btn rounded-3xl'>{product.rating}</button></p>
                <div className='flex gap-4'>
                    <button
                        className={`btn ${isInCart ? 'bg-gray-300' : 'bg-purple-500 text-white'} rounded-3xl`}
                        onClick={handleAddToCart}
                        disabled={isInCart}
                    >
                        {isInCart ? 'Added to Cart' : 'Add to Cart'} <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button
                        className={`btn ${isInWishlist ? 'bg-gray-300' : 'bg-transparent'} rounded-3xl`}
                        onClick={handleAddToWishlist}
                        disabled={isInWishlist}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;