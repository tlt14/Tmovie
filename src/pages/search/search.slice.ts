import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        results: [],
        loading: false,
        error: null,
        isShowModal: false
    },
    reducers:{
        startSearch:(state)=>{
            state.loading = true;
        },
        stopSearch:(state)=>{
            state.loading = false;
            state.results = [];
            state.error = null;
            state.query = "";
        },
        setShowModal: (state,action)=>{
            state.isShowModal =action.payload;
        },
        setQuery:(state,action)=>{
            state.query = action.payload;
        }
    }
})

export const { startSearch, stopSearch,setShowModal,setQuery } = searchSlice.actions;

export default searchSlice.reducer;