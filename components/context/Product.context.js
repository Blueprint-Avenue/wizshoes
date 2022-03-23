import React, { createContext, useState } from 'react';
import {nike} from '../shared/NikeProducts';


export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (
        <ProductContext.Provider
            value={{
                isLoading,
                products: nike
            }}
        >
            {children}
        </ProductContext.Provider>
    )
};
