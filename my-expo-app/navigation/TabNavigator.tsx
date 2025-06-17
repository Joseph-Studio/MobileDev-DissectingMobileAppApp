import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
    <Tab.Navigator initialRouteName="Sign In">
        <Tab.Screen name="Sign In" component={SignInScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
    );
}
