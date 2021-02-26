import React, { useContext, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { Redirect } from '../react-router';
import { NativeRedirect } from '../react-router.native';
import { UserContext } from '../libs/providers/userProvider';
import Card from '../components/card';
const web = Platform.OS === 'web';
const Feed = () => {
  const { isAuthenticated, response } = useContext(UserContext);
  if (!isAuthenticated && web) {
    return <Redirect to="/register" />;
  }
  if (!isAuthenticated && !web) {
    return <NativeRedirect to="/register" />;
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 50, marginBottom: 10, fontFamily: 'noto-bold' }}>
        Your SIMCheck Response is ⚡
      </Text>
      <Card data={response!} />
    </View>
  );
};
export default Feed;
