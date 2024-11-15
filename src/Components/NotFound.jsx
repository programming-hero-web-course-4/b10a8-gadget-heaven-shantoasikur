import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <Helmet>
                <title>404 - Page Not Found | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-6xl font-bold text-purple-500">404</h1>
            <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</p>
            <p className="mt-2 text-gray-500">The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="mt-5 btn rounded-3xl bg-purple-500 text-white px-6 py-2">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
