import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Input, theme, Button} from 'galio-framework';

const LoginScreen = props => {
  return (
    <View style={GlobalStyles.maincreen}>
      <Image
        source={require('../assets/imgs/thumbnail.png')}
        style={{height: 150, width: 220, alignSelf: 'center', marginTop: 20}}
      />
      <View style={styles.bottomCard}>
        <View style={styles.content}>
          <Text style={GlobalStyles.label}>Se Connecter</Text>
          <Text style={GlobalStyles.InputLabel}>Email</Text>
          <Input
            placeholder="mail@example.com"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
          />
          <Text style={GlobalStyles.InputLabel}>Mot de passe</Text>
          <Input
            placeholder="**************"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
            password
            viewPass
          />
          <Button
            color="#0C16DB"
            style={GlobalStyles.BtnStyle}
            onPress={() => {
              props.navigation.replace('Main');
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'poppins_bold',
              }}>
              Se Connecter
            </Text>
          </Button>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                color: '#0C16DB',
                fontFamily: 'poppins_bold',
                alignSelf: 'center',
              }}>
              Vous n'avez pas un compte?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Signup');
              }}>
              <Text
                style={{
                  color: '#0C16DB',
                  fontFamily: 'poppins_bold',
                  alignSelf: 'center',
                }}>
                Inscrivez vous
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomCard: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.55,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  content: {
    alignSelf: 'center',
    marginTop: 2,
  },
});
