import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {Entypo, Foundation} from "@expo/vector-icons";


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{backgroundColor: 'black', padding: 20,}}>

                <View style={{marginBottom: 10, marginTop: 20}}>

                        <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 80, height: 80, borderRadius: 50,}} source={require("../../assets/images/rokas.jpeg")} />

                            <View style={{marginLeft: 1, alignItems: 'flex-start'}}>
                                <Text style={{color: 'white', fontSize: 18, marginBottom: 15, fontWeight: '600', marginLeft: 10,}}>Rokas Rudzianskas</Text>
                                <View style={{flexDirection: "row", marginHorizontal: 10, alignItems: 'center'}}>
                                    <Text style={{color: "grey", fontSize: 18, marginRight: 10}}>5.00</Text>
                                    <Foundation name="star" size={19} color="lightgrey" />
                                </View>
                            </View>
                        {/*</View>*/}

                    </View>
                    {/*</View>*/}

                </View>

                <View style={{borderTopWidth: 1, borderColor: '#212121', borderBottomWidth: 1}}>
                    <Pressable onPress={() => console.log("Make Money Driving")}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#dddddd', fontSize: 22, paddingVertical: 18, }}>Messages</Text>
                            <Entypo style={{marginLeft: 3}} name="dot-single" size={27} color="#00AFF8FF" />
                        </View>
                    </Pressable>
                </View>

                <Pressable onPress={() => console.log("Account")}>
                    <Text style={{color: '#dddddd', fontSize: 18, paddingVertical: 5, marginTop: 15}}>Do more with your account</Text>
                </Pressable>

                <Pressable onPress={() => console.log("Make Money Driving")}>
                    <Text style={{color: 'white', fontSize: 18, paddingVertical: 5, marginBottom: 10}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
