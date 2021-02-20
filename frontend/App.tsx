import React, { useEffect, useState } from 'react';
import { Platform, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { Router, Route } from './react-router';
import {
  Router as NativeRouter,
  Route as NativeRoute,
} from './react-router.native';
import Register from './screens/Register';
import Splash from './screens/SplashScreen';
import UserProvider from './libs/providers/userProvider';
import { MeyProvider } from 'mey';
import Feed from './screens/feed';
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'noto-bold': require('./assets/fonts/NotoSansJP-Bold.otf'),
      'noto-reg': require('./assets/fonts/NotoSansJP-Regular.otf'),
    }).then(() => setFontLoaded(true));
  });
  if (!fontLoaded)
    return (
      <View>
        <Text>Font Loading</Text>
      </View>
    );
  return (
    <>
      {Platform.OS === 'web' ? (
        <Router>
          <MeyProvider BaseURL="http://localhost:4000">
            <UserProvider>
              <Route exact path="/" component={Splash} />
              <Route path="/register" component={Register} />
              <Route path="/feed" component={Feed} />
            </UserProvider>
          </MeyProvider>
        </Router>
      ) : (
        <NativeRouter>
          <MeyProvider BaseURL="http://localhost:4000">
            <UserProvider>
              <NativeRoute exact path="/" component={Splash} />
              <NativeRoute path="/register" component={Register} />
              <NativeRoute path="/feed" component={Feed} />
            </UserProvider>
          </MeyProvider>
        </NativeRouter>
      )}
    </>
  );
};

export default App;
