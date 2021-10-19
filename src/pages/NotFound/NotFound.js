import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-black text-center'>
            <img className='img-fluid w-100 container' style={{ height: '100vh' }} src="data:image/png;base64,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" alt="" />
            <div className='text-center'>
                <Link to='/'>
                    <button className='btn btn-success mb-5'>Go to HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;