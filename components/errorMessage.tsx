import React, { PropsWithChildren } from 'react'

const ErrorMessage = ({children}: PropsWithChildren) => {
    if(!children) return null;

    return (
        <div className='text-red-500 text-sm pt-2'>{children}</div>
    )
}

export default ErrorMessage;