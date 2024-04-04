//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    const cartItem = [];
    const myCart = {
        addItem: (item, price) => { cartItem.push({ item, price }); },
        removeItem: (item) => {
            const firstelt = cartItem.findIndex((cartItem) => cartItem.item === item);
            if (firstelt != -1) {
                cartItem.splice(firstelt, 1);
            }
        },
        getTotal: () => {
            return cartItem.reduce((total, cartItem) => total + cartItem.price, 0);
        }
    };
    return myCart;
}
