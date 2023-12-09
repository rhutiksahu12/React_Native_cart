import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import Product from './../screens/Product';
import Cart from './../screens/Cart';


const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Product" component={Product} />
                <Tab.Screen name="Cart" component={Cart} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router