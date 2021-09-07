import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as Location from "expo-location";
import RouteNavigator from "./src/navigation/router";
import {NavigationContainer} from "@react-navigation/native";
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';


import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_RazNdoT8l',
        userPoolWebClientId: '1709if2u7o0g9fi55mttiid14k',
    }
});


function App() {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // live location things 👇

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);


    // end of live location thing 👆


    return (
            <NavigationContainer>
              <StatusBar style="auto" />
                <RouteNavigator />
            </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default App;
