//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    item: string;
    price: number;
}

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart():  Cart {
const cartItem:Item[]=[]

const myCart:Cart={
addItem:(item,price)=>{cartItem.push({item,price})},


removeItem:(item)=>{
    const firstelt=cartItem.findIndex((cartItem)=>cartItem.item===item)
    if(firstelt!=-1){
        cartItem.splice(firstelt,1)
    
    }
},

getTotal:()=>{
    return cartItem.reduce((total,cartItem)=>total+cartItem.price,0)
}
};
return myCart
}

