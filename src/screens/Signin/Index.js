import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import Logo from '../../assets/LogoSistema.png'
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native-stack";

export function Signin(){
    const navigation = useNavigation();

    function handleSignin() {
        navigation.navigate('Home');
    }
    
    const [text, setText] = useState('');

    return(
        <View style={styles.container}>

            
            
            <Image 
                source={Logo} 
                style={styles.image}
                resizeMode="stretch"
            />


            <View style={styles.content}>
                <Text style={styles.title}>
                      Sistema {'\n'}
                    Escola
                </Text>

                <Text style={styles.subtitle}>
                      Sua Escola {'\n'}
                    Na Palma Da Sua Mão
                </Text>

                <ButtonIcon 
                    onPress={handleSignin}
                />







            </View>


        </View>


    )
}