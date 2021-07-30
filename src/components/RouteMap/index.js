import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import styles from "./styles";
import cars from "../../../assets/data/cars";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_API_KEY = "AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y";

const RouteMap = ({origin, destination}) => {

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    }

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    }


    // console.log(originLoc);
// this is working on 🚀

    return (

                <MapView
                    style={{width: '100%', height: "100%"}}
                    provider="google"
                    initialRegion={{
                        // latitude: 37.78825,
                        // longitude: -122.4324,
                        // latitude: 28.450627,
                        latitude: origin.details.geometry.location.lat,
                        // longitude: -16.263045,
                        longitude:  origin.details.geometry.location.lng,
                        latitudeDelta: 0.0333,
                        longitudeDelta: 0.0212,
                    }}
                >
                    <MapViewDirections
                        origin={originLoc}
                        destination={destinationLoc}
                        apikey={"AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y"}
                        strokeWidth={6}
                        strokeColor="black"
                    />


                        <Marker
                            coordinate={originLoc}
                            title={"Origin"}
                        >
                        </Marker>


                        <Marker
                            coordinate={destinationLoc}
                            title={"Destination"}
                        >
                        </Marker>



                </MapView>
            // </View>
    );
};

export default RouteMap;

// enabled
