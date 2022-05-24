import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from "../screens/Account"
import List from "../screens/List"
import Menu from "../assets/svgs/Vectormenu.svg"
import Auth from "../assets/svgs/VectorAccount.svg"

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Account' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="List" component={List} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Menu width={24} height={24} />
                    )
                }} />
                <Tab.Screen name="Account" component={Account} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Auth width={24} height={24} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}