import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Button} from 'galio-framework';
import {GlobalStyles} from '../styles/global';
import {useDispatch} from 'react-redux';
import {showCustomModal} from '../store/customModal/actions';
const ProductComp = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.product}>
      <Image
        source={{
          uri: 'http://193.70.91.246:8000/' + props.img,
        }}
        style={{
          height: 145,
          width: 178,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 5,
        }}
      />
      <Text style={GlobalStyles.productLabel}>{props.Name}</Text>
      <Text style={GlobalStyles.productPrice}>{props.Price.toFixed(3)} DT</Text>
      <Button
        size="small"
        color="#487dff"
        style={{width: 170}}
        //style={GlobalStyles.productBtn}
        onPress={() => {
          dispatch(
            showCustomModal({
              productName: props.Name,
              unitPrice: props.Price.toFixed(3),
              totalPrice: props.Price.toFixed(3),
            }),
          );
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'poppins_bold',
          }}>
          Ajouter
        </Text>
      </Button>
    </View>
  );
};

export default ProductComp;

const styles = StyleSheet.create({
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
