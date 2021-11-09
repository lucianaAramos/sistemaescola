import React from "react";
import { View, Text } from 'react-native';
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            
            <View>
                <View style={styles.user}>
                    <Text style={styles.user}>
                        Olá
                    </Text >

                    <Text style={styles.username}>
                        Aluno
                    </Text>
                </View>
                <Text style={styles.message}>
                    Acesse aqui o seu conteúdo acadêmico
                </Text>

            </View>
        </View>
    )
}