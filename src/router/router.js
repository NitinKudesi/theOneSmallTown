import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack, AuthStack}  from './rootStack';

export default Router = () => {
  const [isSigned, setisSigned] = useState(0);
  return (
    <NavigationContainer>
      {isSigned ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
};

// export default Router;