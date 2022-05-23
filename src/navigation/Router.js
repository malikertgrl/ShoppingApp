import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from "../screens/Account"
import List from "../screens/List"

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Account' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="List" component={List} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}