import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {NavBar, Button} from 'galio-framework';
import {GlobalStyles} from '../styles/global';
import Icon from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'galio-framework';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLatestProducts} from '../store/newproducts/actions';
import ProductComp from '../components/ProductComp';
import {DrawerActions} from '@react-navigation/drawer';
const MainScreen = props => {
  const dispatch = useDispatch();
  const img = 'uploads/2020-05-06T13-41-13.045Z-IMG_0050.JPG';

  useEffect(() => {
    dispatch(fetchLatestProducts());
    //console.log(state);
  }, []);
  const state = useSelector(state => state);
  return (
    <View style={GlobalStyles.maincreen}>
      <NavBar
        title="Acceuil"
        titleStyle={GlobalStyles.newsTitle}
        style={GlobalStyles.headerStyle}
        left={
          <Icon
            name="menu"
            style={GlobalStyles.iconStyle}
            onPress={() => {
              //console.log('My Navigator', props.navigation);
              props.navigation.openDrawer();
            }}
          />
        }
        right={<Icon name="shopping-cart" style={GlobalStyles.iconStyle} />}
      />
      <ScrollView style={styles.mainScroll}>
        <View style={styles.header}>
          <Text h5 style={styles.txtStyle}>
            Nouveaux Produits
          </Text>
        </View>

        <ScrollView style={{flexDirection: 'row'}} horizontal={true}>
          {state.newproductsReducer.map(elm => {
           // console.log('My element', elm);
            if (elm.InPromotion) {
              return (
                <ProductComp
                  img={elm.productImage}
                  Price={elm.Promotionprice}
                  Name={elm.productName}
                  id={elm._id}
                  key={Math.random().toString()}
                />
              );
            } else {
              return (
                <ProductComp
                  img={elm.productImage}
                  Price={elm.price}
                  Name={elm.productName}
                  id={elm._id}
                  key={Math.random().toString()}
                />
              );
            }
          })}
        </ScrollView>
        <View style={styles.header}>
          <Text h5 style={styles.txtStyle}>
            En Promotions
          </Text>
        </View>
        <ScrollView style={{flexDirection: 'row'}} horizontal={true}>
          {state.newproductsReducer.map(elm => {
            //console.log('My element', elm);
            if (elm.InPromotion) {
              return (
                <ProductComp
                  img={elm.productImage}
                  Price={elm.Promotionprice}
                  Name={elm.productName}
                  id={elm._id}
                  key={Math.random().toString()}
                />
              );
            }
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    flex: 1,
    //alignItems: 'flex-start',
    height: '100%',
  },
  header: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  txtStyle: {
    color: '#487dff',
    fontFamily: 'poppins_bold',
    textAlign: 'center',
    margin: 5,
  },
  product: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 256,
    width: 185,
    margin: 10,
    alignItems: 'center',
  },
});
export default MainScreen;
