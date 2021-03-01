import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/forms';
import Button from '../components/Button';
import { COLORS, FONTS, images, SIZES } from '../constants';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    // const result = await authApi.login(email, password);
    // if (!result.ok) return setLoginFailed(true);
    // setLoginFailed(false);
    // auth.logIn(result.data);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: SIZES.padding2,
        }}
      >
        <Text style={{ ...FONTS.h1, color: COLORS.darkGray, fontWeight: 'bold' }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.darkGray,
            padding: SIZES.padding,
            textAlign: 'center',
          }}
        >
          Please enter account details here
        </Text>
      </View>

      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error='Invalid email or password.' visible={loginFailed} />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email-outline'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock-outline'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <Text style={{ paddingTop: 20, paddingBottom: 60, paddingLeft: 10 }}>
          Forgot Password?{' '}
        </Text>
        <SubmitButton title='Login' color='primary' />
      </Form>

      <View>
        <Text style={{ padding: 10, color: COLORS.lightGray, textAlign: 'center' }}>
          Or continue with
        </Text>
        <Button
          title=' Google'
          color='secondary'
          icon='google'
          onPress={() => console.log('google')}
        />
        <Text style={{ padding: 10 }}>
          Don't have any account?
          <Text
            style={{ color: COLORS.primary, fontWeight: 'bold' }}
            onPress={() => navigation.navigate('Register')}
          >
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 100,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default LoginScreen;
