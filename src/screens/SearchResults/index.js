import React, {useState} from 'react';
import {Dimensions, Text, View} from "react-native";
import UberTypes from "../../components/UberTypes";
import RouteMap from "../../components/RouteMap";
import {useRoute} from "@react-navigation/native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {createOrder} from "../../graphql/mutations";




const SearchResults = (props) => {
    const typeState = useState(null);

    const route = useRoute();
    const {originPlace, destinationPlace} = route.params;

    const onSubmit = async () => {
        const [type] = typeState; /// takes the element 0

        if(!type) {
            return;
        }

        /// submit to the server

        try {

            const userInfo = await Auth.currentAuthenticatedUser();

            const input = {
                type: type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,
                destLatitude: destinationPlace.details.geometry.location.lat,
                destLongitude: destinationPlace.details.geometry.location.lng,

                userId: userInfo.userAttributes.sub,
                carId: ,
            }

            const response = await API.graphql(graphqlOperation(createOrder, {input}))


        } catch (e) {
            console.log(e);
        }

    }
    // console.log("🚀",route.params);

    return (
        <View style={{justifyContent: 'space-between'}}>


            <View style={{height: Dimensions.get('window').height - 550}}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>

            <View style={{height: 550,
                // backgroundColor: 'white',
            }}>
                <UberTypes typeState={typeState} onSubmit={onSubmit} />
            </View>
        </View>
    );
};

export default SearchResults;
