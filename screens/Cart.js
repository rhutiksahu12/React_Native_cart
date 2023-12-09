import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { useCart } from '../context/cartContext';
import { StyleSheet } from 'react-native-web';

const Cart = () => {
    const { cartItems } = useCart()

    const renderProductItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text>{item.title}</Text>
                <Text>{item.quantity}</Text>
                <View>
                    <Text>Rs.</Text>
                    <Text>{item.price}</Text>
                </View>
                {/* Render other product details as needed */}
            </View>
        );
    };

    const calculateTotalAmount = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity
        })
        return total;
    }

    return (
        <View>

            <FlatList data={cartItems} renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
            />

            <View style={styles.rightAlign}>
                <Text >
                   Total: {calculateTotalAmount()}
                </Text>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    rightAlign: {
        alignSelf: 'flex-end',
        marginRight: 20,
    }
})

export default Cart