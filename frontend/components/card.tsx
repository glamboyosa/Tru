import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { CardProps } from '../libs/types/cardProps';
const Card = ({ data }: CardProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>No SIM Change?: {data.no_sim_change ? 'true': 'false'}</Text>
    <Text style={styles.text}>Completed?: {data.status}</Text>
    <Text style={styles.text}>Check ID: {data.check_id}</Text>
    <Text style={styles.text}>Charge Currency 💰: {data.charge_amount}</Text>
    <Text style={styles.text}>Charge Amount 💰: {data.charge_amount}</Text>
    <Text style={styles.text}>Snapshot Balance 💰: {data.snapshot_balance}</Text>
    <Text style={styles.text}>
      Created At: Date: {data.created_at.split('T')[0]}, Time:{' '}
      {data.created_at.split('T')[1].split('+')[0]}
    </Text>
    <Text style={styles.text}>
      Last SIM Change At: Date: {data.last_sim_change_at.split('T')[0]}, Time:{' '}
      {data.last_sim_change_at.split('T')[1].split('+')[0]}
    </Text>
    <Text
      style={{ color: 'blue' }}
      onPress={() => Linking.openURL(`${data._links.self.href}`)}
    >
      SimCheck Link 🚀
    </Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    fontFamily: 'noto-reg',
    marginBottom: '5px',
  },
});
export default Card;
