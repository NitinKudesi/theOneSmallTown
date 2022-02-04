import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import { AppStack, AuthStack } from './rootStack';

export default Router = () => {
const [isSigned, setisSigned] = useState(false);
    return(
        <NavigationContainer>
            {isSigned ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
};

