import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { BlurView } from 'expo-blur';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';

const LoginScreen = () => {

    const uri = 'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80';

        return (
            <View style={tw`items-center flex-1 bg-blue-700`}>
                 <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />
                        <BlurView intensity={60} tint="dark" style={styles.blurContainer}>

                    <View style={tw`flex flex-row items-center justify-center flex-1 -mt-32`}>
                        <FontAwesome5 name="uber" size={40} color="white" />
                        <Text style={tw`text-xl text-white ml-4`}>
                            Login to Uber
                        </Text>
                    </View>

                        <View style={tw`flex items-center justify-center`}>
                    <View style={tw`absolute bottom-0 mb-24`}>
                            <TouchableOpacity activeOpacity={0.8} >
                                <View style={tw`px-11 py-3 bg-black flex flex-row items-center border-2 border-gray-300 rounded-full  mt-2`}>
                                    <FontAwesome5 name="uber" size={25} color="white" />
                                    <Text style={tw`text-gray-100 text-center ml-4 text-lg font-bold`}>Sign in to Uber</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                        </BlurView>
            </View>
        );
    }



    export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    blurContainer: {
        flex: 1,
        padding: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '600'
    },
});
