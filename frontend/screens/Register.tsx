import { Picker } from '@react-native-picker/picker';
import { useMutation } from 'mey';
import React, { useContext, useEffect, useState } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { transformPhoneNumber } from '../libs/helpers/transformPhoneNumber';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
import useTransformCountryCodes from '../libs/hooks/useTransformCountryCodes';
import { UserContext } from '../libs/providers/userProvider';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { useHistory } from '../react-router';
import { useHistory as useNativeHistory } from '../react-router.native';
import Label from '../components/label';
import { SIMCheckResponseType } from '../libs/types/simCheckResponse';
const web = Platform.OS === 'web';
type useMutationType = {
  loading: boolean;
  handleRequest: (body: any) => void;
  data: { data: SIMCheckResponseType };
};
const Register = () => {
  const { isAuthenticated, setIsAuthenticated, setResponse } = useContext(
    UserContext,
  );
  const { loading, handleRequest, data }: useMutationType = useMutation(
    '/api/simcheck',
    'post',
  );
  const { responsiveWidth } = useResponsiveScreen();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const history = useHistory();
  const nativeHistory = useNativeHistory();
  const callingCode = useTransformCountryCodes();
  const webFontSize = web ? responsiveWidth(7) : responsiveWidth(30);
  useEffect(() => {
    if (data?.data?.status === 'COMPLETED') {
      setIsAuthenticated(data.data.no_sim_change);
      setResponse(data.data);
    } else if (data?.data?.status === 'ERROR') {
      showMessage({
        message: 'An Error Occurred. Please Try Again Later',
        type: 'danger',
        style: styles.container,
      });
    }
  }, [data]);
  const onPressHandler = () => {
    const body = {
      phone_number: transformPhoneNumber(countryCode, phoneNumber),
    };

    handleRequest(body);
  };
  if (isAuthenticated) {
    web ? history.push('/feed') : nativeHistory.push('/feed');
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: webFontSize, fontFamily: 'noto-bold' }}>
        {' '}
        Register to get started
      </Text>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Label label="Country Code" />
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
        </View>
        <View style={styles.formGroup}>
          <Label label="Phone Number" />
          <TextInput
            style={styles.textInput}
            placeholder="ex. (415) 555-0100"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>
      </View>

      <TouchableWithoutFeedback disabled={loading} onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </TouchableWithoutFeedback>
      <FlashMessage />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: !web ? StatusBar?.currentHeight! + 10 : 0,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  formGroup: {
    flexDirection: 'column',
  },
  textInput: {
    padding: 15,
    borderColor: '#20232a',
    borderWidth: 3,
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
    // cursor: 'pointer',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'noto-reg',
  },
});
export default Register;
