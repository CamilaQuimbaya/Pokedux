import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const {setLoading} = uiSlice.actions;
console.log(uiSlice);
export default uiSlice.reducer;