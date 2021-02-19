import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import UserProvider from './libs/providers/userProvider';
import RootStack from './routes/rootStack';
import { StatusBar, View } from 'react-native';
import * as Font from 'expo-font';
import { MeyProvider } from 'mey';
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      'noto-bold': require('./assets/fonts/NotoSansJP-Bold.otf'),
      'noto-reg': require('./assets/fonts/NotoSansJP-Regular.otf'),
    }).then(() => setFontLoaded(true));
  });
  if (!fontLoaded) return <View>Font Loading</View>;
  return (
    <MeyProvider BaseURL='http://localhost:4000'>
      <UserProvider>
        <StatusBar barStyle='light-content' backgroundColor='#F03955' />
        <RootStack />
      </UserProvider>
    </MeyProvider>
  );
}
