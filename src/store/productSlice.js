import {createSlice} from '@reduxjs/toolkit'

const initialState = [] ;

const productSlice = createSlice({

    name:'product',

    initialState:{
       data:[],
       status: 'idle' 
    },
    reducers:{
        //add and remove are actions
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
