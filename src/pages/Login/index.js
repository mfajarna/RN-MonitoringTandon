import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Button, Gap, Input} from '../../components/atoms';

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
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom2}>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => navigation.replace('MainApp')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 32,
    height: 500,
    backgroundColor: 'white',
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Assistant-SemiBold',
    marginTop: 40,
    marginBottom: 60,
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
    height: 300,
  },
  bottom2: {
    backgroundColor: '#223694',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    height: 300,
  },
  button: {
    marginTop: -150,
  },
});
