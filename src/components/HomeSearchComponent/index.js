import React from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";
import {AntDesign, Entypo, Feather, FontAwesome5, Ionicons} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const HomeSearch = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('DestinationSearch');
    }


    return (
        <View>
        <Pressable onPress={goToSearch} style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={24} color="#535353" />
                <Text style={{fontWeight: '600'}}>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="#535353" />
            </View>
        </Pressable>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name="clockcircle" size={20} color="#ffffff" />
                </View>

                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name="home" size={20} color="#ffffff" />
                </View>

                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            <View style={styles.row}>
                <View style={{flexDirection: "row", alignItems: 'center', flex: 1}}>
                    <Ionicons name="ios-gift-outline" size={20} color="black" />
                    <Text style={styles.destinationText}>302 pts</Text>
                </View>

                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <Text style={styles.destinationText}>Rewards Hub</Text>
                    <FontAwesome5 name="arrow-right"  style={{marginLeft: 10}} size={20} color="lightgrey" />
                </View>

            </View>

        </View>

    );
};

export default HomeSearch;
