import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useCartWishlist } from './CartWishlistContext';

const Dashboard = () => {
    const { cartItems, wishlistItems, removeFromCart, removeFromWishlist, clearCart } = useCartWishlist();
    const [activeTab, setActiveTab] = useState("Cart");
    const [isSorted, setIsSorted] = useState(false);

    const navigate = useNavigate();

    const handleSortToggle = () => {
        setIsSorted(!isSorted);
    };

    const handlePurchaseClick = () => {
        document.getElementById('my_modal_1').showModal();
    };

    const displayedCartItems = isSorted
        ? [...cartItems].sort((a, b) => b.price - a.price)
        : cartItems;

    const totalPrice = displayedCartItems.reduce((total, item) => total + item.price, 0);
    
    const handleCloseModal = () => {
        document.getElementById('my_modal_1').close();
        clearCart();
        navigate('/');
    };

    return (
        <div className="dashboard bg-transparent">
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className='flex items-center gap-5 justify-center mt-[-70px] mb-[50px]'>
                <button className={`btn rounded-3xl text-lg font-bold px-7 py-2 ${activeTab === "Cart" ? "bg-white text-purple-500" : "bg-transparent text-white border border-white"}`} onClick={() => setActiveTab("Cart")}>Cart</button>
                <button className={`btn rounded-3xl text-lg font-bold px-4 py-2 ${activeTab === "WishList" ? "bg-white text-purple-500" : "bg-transparent text-white border border-white"}`} onClick={() => setActiveTab("WishList")}>Wishlist</button>
            </div>

            {activeTab === "Cart" && (
                <div className="cart-items">
                    <div className='flex justify-between items-center w-[90%] mx-auto mb-10'>
                        <h2 className='text-[28px] font-[700]'>Cart Items</h2>
                        <div className='flex lg:flex-row flex-col sm:flex-row items-center gap-5'>
                            <p className='text-[28px] font-[700]'>Total Price: ${totalPrice}</p>
                            <button className='btn rounded-3xl border-purple-500' onClick={handleSortToggle}>Sort by Price<i className="fa-solid fa-sort"></i></button>
                            <button className='btn rounded-3xl bg-purple-500 text-white' onClick={handlePurchaseClick} disabled={totalPrice === 0}>Purchase</button>
                        </div>
                    </div>
                    {displayedCartItems.map((item) => (
                        <div key={item.product_id} className='w-[90%] mx-auto p-5 bg-white rounded-[20px] flex items-center justify-between mb-10'>
                            <div className='flex items-center gap-10'>
                                <img className='w-[200px] h-[100px] border rounded-[20px]' src={item.product_image} alt={item.product_title} />
                                <div className=''>
                                    <h3 className='text-[24px] font-[600]'>{item.product_title}</h3>
                                    <p>{item.description}</p>
                                    <p className='text-[24px] font-[600]'>${item.price}</p>
                                </div>
                            </div>
                            <button className='btn rounded-3xl w-fit' onClick={() => removeFromCart(item.product_id)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "WishList" && (
                <div className="wishlist-items">
                    <h2 className='text-[28px] font-[700] mb-10 w-[90%] mx-auto'>Wishlist Items</h2>
                    {wishlistItems.map((item) => (
                        <div key={item.product_id} className='w-[90%] mx-auto p-5 bg-white rounded-[20px] flex items-center justify-between mb-10'>
                            <div className='flex items-center gap-10'>
                                <img className='w-[200px] h-[100px] border rounded-[20px]' src={item.product_image} alt={item.product_title} />
                                <div className=''>
                                    <h3 className='text-[24px] font-[600]'>{item.product_title}</h3>
                                    <p>{item.description}</p>
                                    <p className='text-[24px] font-[600]'>${item.price}</p>
                                </div>
                            </div>
                                <button className='btn rounded-3xl w-fit' onClick={() => removeFromWishlist(item.product_id)}><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    ))}
                </div>
            )}

            
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center gap-3">
                    <img src="/WhatsApp Image 2024-11-16 at 02.19.58_bae3a8dd.jpg" alt="" />
                    <h3 className="font-[700] text-[24px]">Payment Successfully</h3>
                    <p className="font-[500] text-[16px]">Thanks for purchasing.</p>
                    <p className="font-[500] text-[16px]">Total: {totalPrice}</p>
                    <button className="btn w-full rounded-3xl" onClick={handleCloseModal}>Close</button>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;
