import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Button, Gap, Input, Link} from '../../components/atoms';

const Login = ({navigation}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.page}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai Monitoring</Text>
          <View style={styles.input}>
            <Input type="Username" />
            <Gap height={19} />
            <Input type="Password" />
            <Gap height={19} />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom2}>
          <Gap height={50} />
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => navigation.replace('MainApp')}
            />
          </View>
          <Gap height={14} />
          <Button
            title="Register"
            type="Register"
            onPress={() => navigation.replace('Register')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 32,
    height: 420,
    backgroundColor: 'white',
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Assistant-SemiBold',
    marginTop: 30,
    marginBottom: 30,
    maxWidth: 170,
  },
  input: {
    marginTop: -10,
  },
  wrapper: {
    backgroundColor: '#223694',
  },
  bottom: {
    backgroundColor: 'white',
  },
  bottom2: {
    backgroundColor: '#223694',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    height: 500,
  },
  button: {
    marginTop: -300,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Assistant-Regular',
  },
});
