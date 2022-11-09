import React from 'react';
import useTitle from '../../hook/useTitle';

const Block = () => {
    useTitle('Block')
    return (
        <>
            <div className='mt-16'>
                this is block
            </div>

        </>
    );
};

export default Block;