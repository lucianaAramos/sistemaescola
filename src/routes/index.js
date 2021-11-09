import React from 'react';
import { NavigationContainer } from '@react-navigation/native-stack';


import { AuthRoutes } from './auth.routes';

export function Routes (){
    return(

            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>

    )
}