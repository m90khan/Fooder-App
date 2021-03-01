import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Screen from '../components/Screen';

import { icons, COLORS, SIZES, FONTS } from '../constants';

const Restaurant = ({ route, navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  console.log(orderItems);
  useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  });
  console.log(currentLocation);

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId == menuId);

    if (action == '+') {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', marginBottom: SIZES.padding }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>

        {/* Restaurant Name Section */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
          </View>
        </View>

        <Icon onPress={() => console.log('menu')} source={icons.list} />
      </View>
    );
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
      >
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: 'center' }}>
            <View style={{ height: SIZES.height * 0.35 }}>
              {/* Food Image */}
              <Image
                source={item.photo}
                resizeMode='cover'
                style={{
                  width: SIZES.width,
                  height: '100%',
                }}
              />

              {/* Quantity */}
              <View
                style={{
                  position: 'absolute',
                  bottom: -22,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={COLORS.lightGray}
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    height: 50,
                  }}
                  onPress={() => editOrder('-', item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableHighlight>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
                </View>

                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={COLORS.lightGray}
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,

                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => editOrder('+', item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableHighlight>
              </View>
            </View>

            {/* Name & Description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: 'center',
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>
                {item.name} - ${item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* Calories */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}
            >
              <Image
                source={icons.fire}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.darygray,
                }}
              >
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={{ height: 30 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.padding,
          }}
        >
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: 'clamp',
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderOrder() {
    return (
      <View>
        {renderDots()}
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.basket}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
                {getBasketItemCount()} items
              </Text>
            </View>

            <Text style={{ ...FONTS.h4 }}>${sumOrder()}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.pin}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
                {currentLocation && currentLocation.streetName
                  ? currentLocation.streetName
                  : 'Location'}
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.master_card}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                }}
              />
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
            </View>
          </View>

          {/* Order Button */}
          <View
            style={{
              padding: SIZES.padding * 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              title='Order'
              onPress={() =>
                navigation.navigate('OrderDelivery', {
                  restaurant: restaurant,
                  currentLocation: currentLocation,
                })
              }
            />
          </View>
        </View>

        {isIphoneX() && (
          <View
            style={{
              position: 'absolute',
              bottom: -34,
              left: 0,
              right: 0,
              height: 34,
              backgroundColor: COLORS.white,
            }}
          ></View>
        )}
      </View>
    );
  }

  return (
    <Screen style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray4,
  },
});

export default Restaurant;
