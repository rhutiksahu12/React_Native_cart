import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useCart } from '../context/cartContext';



const ProductList = (props) => {
    
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        // console.log(item, "productList")
        addToCart(item)
    }

    const renderProductItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity onPress={()=>{ props.navigation.navigate('Product', { product: item })
                }}>
                    <Text>{item.title}</Text>
                    <View>
                        <Text>Rs.</Text>
                        <Text>{item.price}</Text>
                    </View>
                    {/* Render other product details as needed */}
                    <TouchableOpacity onPress={() => handleAddToCart(item)}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };
    return (

        <FlatList data={props.products} renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
        />

    )
}

export default ProductList