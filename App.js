import { StatusBar } from 'react-native';
import React from 'react';

import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';


export default function App(){
  return(
    <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <Routes />
    </>

  );
};