import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { CartProvider } from "../context/cartContext";
import ProductList from "../components/ProductList";


const Home = ({ navigation }) => {
    const [products, setProducts] = useState([])
    

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            const data = response.data.products;
            setProducts(data); // Update products state with fetched data
            // console.log(data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        // <CartProvider>
            <View>
                <Text >
                    Product List
                </Text>
                <ProductList products={products} navigation={navigation} />
            </View>
        // </CartProvider>
    )
}

export default Home;