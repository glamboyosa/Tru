import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { Router, Route, Link } from './react-router';
import Register from './screens/Register';
import Splash from './screens/SplashScreen';
import UserProvider from './libs/providers/userProvider';
import { MeyProvider } from 'mey';
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'noto-bold': require('./assets/fonts/NotoSansJP-Bold.otf'),
      'noto-reg': require('./assets/fonts/NotoSansJP-Regular.otf'),
    }).then(() => setFontLoaded(true));
  });
  if (!fontLoaded) return <View>Font Loading</View>;
  return (
    <Router>
      <MeyProvider BaseURL="http://localhost:4000">
        <UserProvider>
          <Route exact path="/" component={Splash} />
          <Route path="/register" component={Register} />
        </UserProvider>
      </MeyProvider>
    </Router>
  );
};

export default App;
