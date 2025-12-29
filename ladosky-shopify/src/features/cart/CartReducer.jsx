export const initialCart = [];

export function cartReducer(state, action) {
    switch(action.type){
        case "LOAD_CART":
            return action.payload;
        case "ADD_TO_CART":
            const existingItem = state.find(item => item.id === action.payload.id);
            if(existingItem){
                return state.map(item => 
                    item.id === action.payload.id 
                    ? {...item, quantity: item.quantity + 1} 
                    : item
                );
            } else {
                return [...state, {...action.payload, quantity: 1}];
            }
        case "INCREASE_QUANTITY":
            return state.map((item) => 
                item.id === action.payload 
                ? {...item, quantity: item.quantity + 1} 
                : item
            );
        case "DECREASE_QUANTITY":
            return state.map((item) => 
                item.id === action.payload 
                ? {...item, quantity: Math.max(item.quantity - 1, 1)} 
                : item
            );
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.payload);
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
}