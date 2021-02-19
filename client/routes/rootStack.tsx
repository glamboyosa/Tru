import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../libs/providers/userProvider';
import { View, Text, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/SplashScreen';
const Stack = createStackNavigator();
const RootStack = () => {
  const { isAuthenticated } = useContext(UserContext);
  console.log(isAuthenticated);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <>
            <Stack.Screen
              name='Splash'
              options={{
                headerTitleAlign: 'center',
                headerShown: Platform.OS === 'web' ? false : true,
              }}
              component={Splash}
            />
          </>
        ) : (
          <View>
            <Text>Hi</Text>
          </View>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
