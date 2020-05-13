import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Input, theme, Button} from 'galio-framework';

const SignupScreen = () => {
  return (
    <View style={GlobalStyles.maincreen}>
      <ScrollView>
        <Image
          source={require('../assets/imgs/thumbnail.png')}
          style={{height: 120, width: 180, alignSelf: 'center', marginTop: 20}}
        />
        <View style={styles.bottomCard}>
          <View style={styles.content}>
            <Text style={GlobalStyles.label}>Inscription</Text>
            <Text style={GlobalStyles.InputLabel}>Nom & Prénom</Text>
            <Input
              placeholder="mail@example.com"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
            />
            <Text style={GlobalStyles.InputLabel}>Email</Text>
            <Input
              placeholder="mail@example.com"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
            />
            <Text style={GlobalStyles.InputLabel}>Adresse</Text>
            <Input
              placeholder="mail@example.com"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
            />
            <Text style={GlobalStyles.InputLabel}>Adresse</Text>
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
            <Button color="#0C16DB" style={GlobalStyles.BtnStyle}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'poppins_bold',
                }}>
                Inscrivez vous
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
{
  /* <View style={GlobalStyles.maincreen}>
      <Image
        source={require('../assets/imgs/thumbnail.png')}
        style={{height: 120, width: 180, alignSelf: 'center', marginTop: 20}}
      />
      <View style={styles.bottomCard}>
        <View style={styles.content}>
          <Text style={GlobalStyles.label}>Inscription</Text>
          <Text style={GlobalStyles.InputLabel}>Nom & Prénom</Text>
          <Input
            placeholder="mail@example.com"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
          />
          <Text style={GlobalStyles.InputLabel}>Email</Text>
          <Input
            placeholder="mail@example.com"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
          />
          <Text style={GlobalStyles.InputLabel}>Adresse</Text>
          <Input
            placeholder="mail@example.com"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
          />
          <Text style={GlobalStyles.InputLabel}>Adresse</Text>
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
          <Button color="#0C16DB" style={GlobalStyles.BtnStyle}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'poppins_bold',
              }}>
              Inscrivez vous
            </Text>
          </Button>
         
        </View>
      </View>
    </View> */
}
export default SignupScreen;

const styles = StyleSheet.create({
  bottomCard: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.82,
    width: Dimensions.get('window').width,
    //position: 'fixed',
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
