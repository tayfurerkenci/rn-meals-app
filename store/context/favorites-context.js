import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

const FavoritesContextProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        // adding based on previous snapshot,
        // we should pass a function
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;