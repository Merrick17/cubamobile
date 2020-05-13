import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import SettingsScreen from '../screens/SettingsScreen';
import MainScreen from '../screens/MainScreen';
import CartScreen from '../screens/CartScreen';
import ProductScreen from '../screens/ProductScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Drawer = createDrawerNavigator();
const ProductStack = createStackNavigator();
const MyProducts = () => {
  return (
    <ProductStack.Navigator initialRouteName="Prod" headerMode="none">
      <ProductStack.Screen name="Prod" component={ProductScreen} />
    </ProductStack.Navigator>
  );
};
const DrawerContainer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Accueil"
      drawerContent={props => <DrawerContent {...props} />}
      independent={true}>
      <Drawer.Screen name="Accueil" component={MainScreen} />
      <Drawer.Screen name="Panier" component={CartScreen} />
      <Drawer.Screen name="Profile" component={SettingsScreen} />
      <Drawer.Screen name="Product" component={ProductScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerContainer;

const styles = StyleSheet.create({});
