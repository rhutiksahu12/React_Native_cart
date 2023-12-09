import React from 'react'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useCart } from '../context/cartContext';



const Product = ({ navigation, route }) => {

    const { addToCart } = useCart();

    const { product } = route.params;
    

    const renderCarouselItem = ({ item }) => {
        return (
            <View>
                {/* <Image source={{ uri: item.imageUrl }} style={{ width: 300, height: 200 }} /> */}
                <Image source={{ uri: item }} />
                <Text>Hello</Text>
            </View>
        );
    };

    const handleCart = (item) => {
        // Implement addToCart functionality here
        console.log('Product added to cart');
        addToCart(item)
    };

    const handleFavorites = (item) => {
        // Implement addToFavorites functionality here
        console.log('Product added to favorites', product.images);
        // addToFavorites(item)
    };

    return (
        <View>
            <Carousel
                layout='default'
                data={product.images}
                renderItem={renderCarouselItem}
                sliderWidth={300}
                itemWidth={300}
                
            />
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Button title="Add to Cart" onPress={()=>handleCart(product)} />
            <Button title="Add to Favorites" onPress={()=>handleFavorites(product)} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Product