import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Image, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

const LoginScreen = () => {

    const uri = 'https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80';
        const text = 'Hello, my container is blurring contents underneath!';

        return (
            <View style={styles.container}>
                <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />
                <BlurView intensity={90} tint="dark" style={styles.blurContainer}>

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
            padding: 20,
            justifyContent: 'center',
        },
        text: {
            fontSize: 24,
            fontWeight: '600'
        },
    });

    export default LoginScreen;

