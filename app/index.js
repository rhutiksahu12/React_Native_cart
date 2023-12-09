import react from "react";
import Router from "../router/Router";
import { CartProvider } from "../context/cartContext";




// const cartData = [
//     { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//     { id: 2, name: 'Product 2', price: 20, quantity: 1 },
//     // Add more cart items as needed
//   ];


const App = () => {
    return (
        <CartProvider>
            <Router />
        </CartProvider>


    )
}

export default App;