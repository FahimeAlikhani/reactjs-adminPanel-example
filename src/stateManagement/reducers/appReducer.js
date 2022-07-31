import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tmp:""
}

export const appSlice = createSlice({
    name : 'app',
    initialState,
    reducers:{
        setTmp:(state,action)=>state.tmp=action.payload
    }
})

export const { setTmp } = appSlice.actions ;
export default appSlice.reducer ;