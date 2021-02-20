import React, {useContext} from 'react';
import { View, Text, Platform } from 'react-native';
import { useHistory } from '../react-router';
import { useHistory as useNativeHistory } from '../react-router.native';
import { UserContext } from '../libs/providers/userProvider';
const web = Platform.OS === 'web';
const Feed = () => {
  const {isAuthenticated} = useContext(UserContext);
  const history = useHistory();
  const nativeHistory = useNativeHistory();
  if(!isAuthenticated){
    web ? history.push('/register') : nativeHistory.push('/register');
  }
  return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 50 }}>Wohoo we're home</Text>
  </View>
)};
export default Feed;
