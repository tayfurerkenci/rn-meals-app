import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    // reducers are functions that are used to change our state
    reducers: {
        // state is latest state shapshot provided by redux
        addFavorite: (state, action) => {
            // with redux toolkit we can mutate state
            // action.payload is used for transport any extra data
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;