import { Spin } from 'antd';
import React from 'react';
import './LoadingAdmin.scss';

const LoadingAdmin = () => {
    return (
        <div className='loading-admin w-full h-full flex items-center justify-center'>
            <Spin />
        </div>
    );
};

export default LoadingAdmin;