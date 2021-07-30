import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import styles from "./styles";
import cars from "../../../assets/data/cars";
import * as Location from "expo-location";

const HomeMap = (props) => {
    const [position, setPosition] = useState(null);


    const {type} = props;


    const getImageName = (type) => {

        if(type === 'UberX') {
            return require('../../../assets/images/top-UberX.png');
        }

        if(type === 'Comfort') {
            return require('../../../assets/images/top-Comfort.png');
        }
        return require('../../../assets/images/top-UberXL.png');
    }

    useEffect(() =>  {
        // this does something magical, but it works
        Location.installWebGeolocationPolyfill()
        navigator.geolocation.getCurrentPosition(setPosition);
    }, []);

    return (
        // <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>I am the map</Text>

            // <View style={styles.container}>
                <MapView
                    style={{width: '100%', height: "100%"}}
                    provider="google"
                    showsUserLocation={true}
                    initialRegion={{
                        // latitude: 37.78825,
                        // longitude: -122.4324,
                        latitude: 28.450627,
                        longitude: -16.263045,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121,
                    }}
                >

                    {cars.map((car) => (

                        <Marker
                            key={car.id}
                            coordinate={{
                            latitude: car.latitude,
                            longitude: car.longitude }}
                            // image={require("../../../assets/images/top-UberX.png")}
                        >
                            <Image source={getImageName(car.type)} style={{
                                height: 60,
                                width: 60,
                                resizeMode: 'contain',
                                transform: [{
                                    rotate: `${car.heading}deg`,
                                }]
                            }}/>
                        </Marker>

                    ))}



                </MapView>
            // </View>
    );
};

export default HomeMap;
