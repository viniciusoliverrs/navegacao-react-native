import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import Drawer from './Drawer';
//import Stack from './Stack';
import Tab from './Tabs';
export default props => (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            {/*
            <Stack/>
            <Drawer/>
            */}
            <Tab/>
        </NavigationContainer>
    </SafeAreaView>
)