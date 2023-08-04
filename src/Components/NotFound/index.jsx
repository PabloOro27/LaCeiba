import React from 'react';
import NotFoundImg from '../../assets/Images/404NotFound.svg'

const NotFound = () => {
    return (
        <div>
            <img
                className='mt-16 img-fluid w-5/6'
                src={NotFoundImg} 
                alt="404 Not Found" 
            />
        </div>
    );
};

export default NotFound;