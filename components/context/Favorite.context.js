import React, { createContext, useState} from 'react';

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({children}) => {

    const [isFavored, setIsFavored] = useState([]);

    // Add Favorites
    const addFaves = (product) => {
        setIsFavored([...isFavored, product])
    }

    // Remove Favorites
    const removeFaves = (product) => {
        const newFaves = isFavored.filter((p) => p.id !== product.id)
        setIsFavored(newFaves)
    }

    return (
        <FavoriteContext.Provider
            value={{
                isFavored,
                add: addFaves,
                remove: removeFaves
            }}
        >
            {children}
        </FavoriteContext.Provider>
    )
}
