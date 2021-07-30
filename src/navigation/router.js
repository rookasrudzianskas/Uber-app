import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from "./Home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text, View} from "react-native";
import CustomDrawer from "./CustomDrawer";


const RouteNavigator = (props) => {

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    const Something = (props) => (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{props.name}</Text>
        </View>
    )


    return (

        <Drawer.Navigator initialRouteName="HomeNavigator" drawerContent={(props) => (
            <CustomDrawer {...props} />
            )
        }>

            <Drawer.Screen name="Home" component={HomeNavigator} />

            <Drawer.Screen name="Your Trips">
                {() =>  <Something name="Your Trips" />}
            </Drawer.Screen>

            <Drawer.Screen name="Help">
                {() =>  <Something name="Help" />}
            </Drawer.Screen>

            <Drawer.Screen name="Wallet">
                {() =>  <Something name="Wallet" />}
            </Drawer.Screen>

            <Drawer.Screen name="Settings">
                {() =>  <Something name="Settings" />}
            </Drawer.Screen>


        </Drawer.Navigator>
    );

};

export default RouteNavigator;
