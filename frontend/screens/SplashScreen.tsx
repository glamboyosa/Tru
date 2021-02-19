import React, { useRef } from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
import { useHistory } from '../react-router';
const web = Platform.OS === 'web';
const Splash = () => {
  const history = useHistory();
  const img = require('../assets/jellyfish.gif');
  const { responsiveWidth } = useResponsiveScreen();

  const webFontSize = web ? responsiveWidth(7) : responsiveWidth(30);

  const onPressHandler = () => {
    console.log('pressed');
    history.push('/register');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <Text style={{ fontSize: webFontSize, fontFamily: 'noto-bold' }}>
          Let's get started 🔥
        </Text>

        <TouchableWithoutFeedback onPress={onPressHandler}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View>
        </TouchableWithoutFeedback>
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
