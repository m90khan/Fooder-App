import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/forms';
import Button from '../components/Button';
import { COLORS, FONTS, images, SIZES } from '../constants';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
});

function RecoveryScreen(props) {
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
          Password Recovery
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.darkGray,
            padding: SIZES.padding,
            textAlign: 'center',
          }}
        >
          Enter your email to recover your password{' '}
        </Text>
      </View>

      <Form
        initialValues={{ email: '' }}
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
        <View style={{ padding: 20 }}></View>

        <SubmitButton title='Recover Password' color='primary' />
      </Form>
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

export default RecoveryScreen;
