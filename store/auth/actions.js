import {saveItem} from '../../helpers/storage';
import {hideSpinner} from '../spinner/actions';
import {View, StyleSheet, Button, Alert} from 'react-native';
export const loginUser = data => {
  return {
    type: 'LOGIN',
    data: data,
  };
};

export const logoutUser = data => {
  return {
    type: 'LOGOUT',
    data: data,
  };
};

export const authUser = (user, navigation) => {
  return async dispatch => {
    try {
      let response = await fetch('http://193.70.91.246:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user),
      });
      let responseJson = await response.json();
      if (responseJson.token != undefined && responseJson.token != null) {
        console.log(responseJson);
        saveItem('token', responseJson.token);
        saveItem('userId', responseJson.user._id);
        saveItem('cart', responseJson.user.cart);
        dispatch(loginUser(responseJson.user));
        dispatch(hideSpinner());
        navigation.replace('Main');
      } else {
        dispatch(hideSpinner());
        Alert.alert(
          'Erreur',
          'Email ou mot de passe incorrect',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    } catch (ex) {}
  };
};

export const registerUser = (user, navigation) => {
  return async dispatch => {
    try {
      let response = await fetch('http://193.70.91.246:8000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user),
      });
      let responseJson = await response.json();
      console.log('My Response', responseJson);
      if (responseJson.user != undefined && responseJson.user != null) {
        console.log(responseJson);

        dispatch(hideSpinner());
        Alert.alert(
          'Success',
          'Inscription reussite veuillez connecter ',
          [{text: 'OK', onPress: () => navigation.replace('Login')}],
          {cancelable: false},
        );
      } else {
        dispatch(hideSpinner());
        Alert.alert(
          'Erreur',
          "Erreur d'inscription",
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
    } catch (ex) {}
  };
};
