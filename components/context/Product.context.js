import React, { createContext, useState } from 'react';
import { nike } from '../../shared/Products';
import { jordan } from '../../shared/BonusProducts';

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
                item: nike
            }}
        >
            {children}
        </ProductContext.Provider>
    )
};
