const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addProduct(state, action){
            const existingProduct = state.products.find(item => item.product._id == payload._id);

            if(existingProduct){
                existingProduct.quantity ++;
            } else {
                state.products.push(
                    {
                        product: payload,
                        quantity: 1
                    }
                )
            }
        }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;