import { createDrawerNavigator } from '@react-navigation/drawer';

import { createAppContainer } from 'react-navigation/native';

// stacks
import addEventStack from './addEventStack';
import profileStack from './profileStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    addEventStack: {
        screen: addEventStack,
    },
    profileStack: {
        screen: profileStack,
    },
});

export default createAppContainer(RootDrawerNavigator);