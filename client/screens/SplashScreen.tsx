import React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
import { Link } from '@react-navigation/native';
const web = Platform.OS === 'web';
const Splash = () => {
  const { responsiveWidth } = useResponsiveScreen();
  const webFontSize = web ? responsiveWidth(7) : responsiveWidth(30);
  const img = require('../assets/jellyfish.gif');
  const onPressHandler = () => {
    console.log('pressed');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <Text style={{ fontSize: webFontSize, fontFamily: 'noto-bold' }}>
          Let's get started 🔥
        </Text>
        {web ? (
          <Link onPress={() => console.log('does pan cooperate')} to='/Splash'>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </Link>
        ) : (
          <TouchableWithoutFeedback onPress={onPressHandler}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: web ? '100%' : undefined,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#e67e22',
    borderRadius: 8,
    marginTop: '10px',
    cursor: 'pointer',
    width: web ? '150%' : '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'noto-reg',
  },
});
export default Splash;
