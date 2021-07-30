import React, {useState} from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";

const CovidMessage = () => {

    const [clicked, setClicked] = useState(false);

    const turnOffPress = () => {
        setClicked(true);
    }

    return (
        <View>
        {!clicked ? (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>Travel only if necessary</Text>
                <Pressable onPress={turnOffPress}>
                    <AntDesign style={{justifyContent: 'flex-end'}} name="close" size={24} color="white" />
                </Pressable>
            </View>
            <Text style={styles.text}>Help flatten the curve. If you must travel, please exercise caution for your safety and the safety of our community.</Text>
            <Text style={styles.learnMore}>Learn more ▶️</Text>
        </View>
        ) : (
            <View>
                <Text></Text>
            </View>
        )}
        </View>
    );
};

export default CovidMessage;
// something new
