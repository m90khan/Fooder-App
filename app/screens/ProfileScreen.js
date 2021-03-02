import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import Button from '../components/Button';
import { COLORS, FONTS, images, SIZES } from '../constants';
import ListItem from '../components/lists/ListItem';
import { FlatList } from 'react-native-gesture-handler';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Icon from '../components/Icon';
import IconList from '../components/IconList';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
const menuItems = [
  {
    title: 'Orders',
    icon: {
      name: 'order-bool-descending-variant',
      backgroundColor: COLORS.darkGray,
    },
    targetScreen: 'Listings',
  },
  {
    title: 'Messages',
    icon: {
      name: 'email',
      backgroundColor: COLORS.darkGray,
    },
    targetScreen: '',
  },
];
function ProfileScreen(props) {
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
          My Account
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingTop: 20,
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
              fontWeight: 'bold',
              color: COLORS.darkGray,
              padding: SIZES.padding,
            }}
          >
            Profile Details
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.secondary,
              fontWeight: 'bold',
              padding: SIZES.padding,
            }}
          >
            Edit
          </Text>
        </View>
      </View>
      <View>
        <ListItem
          title={'JamesX'}
          subTitle={'jamesk@gmail.com'}
          image={
            'https://res.cloudinary.com/m90khan/image/upload/v1614076029/AirHouse/Users/user-1_j3zuy0.png'
          }
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconList
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<IconList name='logout' backgroundColor={COLORS.darkGray} />}
        onPress={() => logOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    paddingTop: 50,
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ProfileScreen;
