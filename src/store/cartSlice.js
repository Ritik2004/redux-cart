import {createSlice} from '@reduxjs/toolkit'

const initialState = [] ;

const cartSlice = createSlice({

    name:'cart',

    initialState,


    reducers:{
        //add and remove are actions
        //they are pure functions and have no side effect
        add(state, action) {

            //in redux toolkit we can directly change the state

          state.push(action.payload);
        },

        remove(state, action){

         return state.filter((item) => item.id !== action.payload)
        }
    }
})
export const {add, remove} = cartSlice.actions
export default cartSlice.reducer
