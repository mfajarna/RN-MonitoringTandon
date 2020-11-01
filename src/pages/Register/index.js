import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input, Arrow} from '../../components';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header type="Register" />
      <View style={styles.arrow}>
        <Arrow
          style={styles.arrow}
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      <View>
        <Gap height={35} />
        <Input type="Username" />
        <Gap height={10} />
        <Input type="Nama" />
        <Gap height={10} />
        <Input type="Email" />
        <Gap height={10} />
        <Input type="Password" />
        <Gap height={40} />
        <View style={styles.button}>
          <Button
            title="Register"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
  },
  arrow: {
    marginTop: -45,
    marginLeft: 10,
  },
});
