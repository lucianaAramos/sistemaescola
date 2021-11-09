import React from "react";
import {Text, Image, View, TouchableOpacity} from 'react-native';

import { styles } from './styles';

export function ButtonIcon(){
    return(
        <TouchableOpacity style={styles.container}>

            <Text style={styles.title}>
                Entrar com E-mail
            </Text>

        </TouchableOpacity>
    )
}