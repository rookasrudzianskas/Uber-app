import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { BlurView } from 'expo-blur';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';

const LoginScreen = () => {

    const uri = 'https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80';
        const text = 'Hello, my container is blurring contents underneath!';

        return (
            <View style={styles.container}>
                <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />
                <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
                    <View style={tw`flex `}>
                    <View style={tw`flex mb-36 flex-row items-center justify-center`}>
                        <FontAwesome5 name="uber" size={40} color="white" />
                        <Text style={tw`text-xl text-white ml-4`}>
                            Login to Uber
                        </Text>

                    </View>


                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={tw`flex flex-row items-center justify-center  bg-gray-800 py-3 px-3 rounded-full`}>
                            <AntDesign name="google" size={25} color="white" />
                            <Text style={tw`text-xl text-white ml-4 font-bold ml-2`}>Sign in with Google</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </BlurView>
            </View>
        );
    }

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
            padding: 40,
            justifyContent: 'center',
        },
        text: {
            fontSize: 24,
            fontWeight: '600'
        },
    });

    export default LoginScreen;

