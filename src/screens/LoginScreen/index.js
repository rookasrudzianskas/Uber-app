import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { BlurView } from 'expo-blur';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';

const LoginScreen = () => {

    const uri = 'https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80';
        const text = 'Hello, my container is blurring contents underneath!';

        return (
            // <View style={styles.container}>
            //     <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />
            //     <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
            //         <View style={tw`flex `}>
            //         <View style={tw`flex mb-36 flex-row items-center justify-center`}>
            //             <FontAwesome5 name="uber" size={40} color="white" />
            //             <Text style={tw`text-xl text-white ml-4`}>
            //                 Login to Uber
            //             </Text>
            //
            //         </View>
            //
            //
            //         <TouchableOpacity activeOpacity={0.8}>
            //             <View style={tw`flex flex-row items-center justify-center  bg-gray-800 py-3 px-3 rounded-full`}>
            //                 <AntDesign name="google" size={25} color="white" />
            //                 <Text style={tw`text-xl text-white ml-4 font-bold ml-2`}>Sign in with Google</Text>
            //             </View>
            //         </TouchableOpacity>
            //         </View>
            //     </BlurView>
            // </View>
            <View style={tw`items-center flex-1 bg-blue-700`}>
             {/*    <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />*/}
             {/*       <BlurView intensity={90} tint="dark" style={styles.blurContainer}>*/}
             {/*       <View style={tw`flex items-center justify-center flex-1 -mt-32`}>*/}
             {/*           <Text style={tw` text-3xl font-bold mt-24 text-gray-200 text-center`}>Proudly powered by <Text style={tw`text-green-500 font-extrabold`}>Rokas Rudzianskas</Text> and made with ❤️</Text>*/}
             {/*       </View>*/}


             {/*       /!*            <View style={tw`absolute bottom-0 left-0`}>*!/*/}
             {/*       <View style={tw``}>*/}
             {/*           <TouchableOpacity activeOpacity={0.8} >*/}
             {/*               <View style={tw`px-16 py-5 bg-white flex flex-row items-center border-4 border-blue-500 rounded-xl  mt-2`}>*/}
             {/*                   <AntDesign style={tw`mr-5`} name="google" size={24} color="black" />*/}
             {/*                   <Text style={tw`text-gray-700 text-center text-lg font-bold`}>Sign in with Google!</Text>*/}
             {/*               </View>*/}
             {/*           </TouchableOpacity>*/}

             {/*           <TouchableOpacity activeOpacity={0.8} >*/}
             {/*               <View style={tw`px-16 py-5 bg-white flex flex-row items-center border-4 border-blue-500 rounded-xl  mt-2`}>*/}
             {/*                   <AntDesign style={tw`mr-5`}  name="apple1" size={24} color="black" />*/}
             {/*                   <Text style={tw`text-gray-700 text-center text-lg font-bold`}>Sign in with Apple!</Text>*/}
             {/*               </View>*/}
             {/*           </TouchableOpacity>*/}
             {/*       </View>*/}

             {/*</View>*/}
             {/* </BlurView>*/}
            </View>
        );
    }



    export default LoginScreen;

