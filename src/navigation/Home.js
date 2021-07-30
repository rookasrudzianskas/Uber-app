import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const HomeNavigator = (props) => {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>

            <Stack.Screen name="Home" component={HomeScreen}  options={{
                headerShown: false,
            }} />

            <Stack.Screen name="DestinationSearch" component={DestinationSearch}  options={{
                headerShown: false,
            }} />

            <Stack.Screen name="SearchResults" component={SearchResults}  options={{
                headerShown: false,
            }} />

        </Stack.Navigator>
    );
};

export default HomeNavigator;
