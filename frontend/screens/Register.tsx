import { Picker } from '@react-native-picker/picker';
import { useMutation } from 'mey';
import React, { useContext, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
import useTransformCountryCodes from '../libs/hooks/useTransformCountryCodes';
import { UserContext } from '../libs/providers/userProvider';
const web = Platform.OS === 'web';
const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const { loading, handleRequest, data } = useMutation('/api/simcheck', 'post');
  const { responsiveWidth } = useResponsiveScreen();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [z, setZ] = useState(false);
  const callingCode = useTransformCountryCodes();
  const webFontSize = web ? responsiveWidth(7) : responsiveWidth(30);
  const onPressHandler = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: webFontSize, fontFamily: 'noto-bold' }}>
        {' '}
        Register to get started
      </Text>
      <View style={styles.formGroup}>
        <Picker
          selectedValue={countryCode}
          style={{ height: 50, width: 100, fontFamily: 'noto-reg' }}
          onValueChange={(itemValue) => setCountryCode(itemValue)}
        >
          <Picker.Item label="Select Country Code" value="" />
          {callingCode.map((el, i) => (
            <Picker.Item
              key={i}
              label={`${el.country_code} ${el.calling_code}`}
              value={el.calling_code}
            />
          ))}
        </Picker>
        <TextInput
          style={styles.textInput}
          placeholder="ex. (415) 555-0100"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
      </View>

      <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textInput: {
    padding: 15,
    border: '1px solid #000',
    elevation: 5,
    height: 50,
    backgroundColor: '#fff',
    marginLeft: '10px',
    fontFamily: 'noto-reg',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#e67e22',
    borderRadius: 8,
    marginTop: '10px',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'noto-reg',
  },
});
export default Register;
