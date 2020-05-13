import {GlobalStyles} from '../styles/global';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {NavBar, Button, Input} from 'galio-framework';

import Icon from 'react-native-vector-icons/Entypo';

import {useDispatch, useSelector} from 'react-redux';

import ProductComp from '../components/ProductComp';
import {hideCustomModal, changeQte} from '../store/customModal/actions';
const ProductScreen = props => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  //console.log('My Products', state.productsReducer);

  return (
    <View style={GlobalStyles.maincreen}>
      <NavBar
        title={state.SelectedCateg.name}
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
      {state.productsReducer.length != 0 ? (
        <FlatList
          data={state.productsReducer}
          renderItem={({item}) => {
            //console.log('My Element', item);
            return (
              <ProductComp
                img={item.productImage}
                Price={item.Promotionprice}
                Name={item.productName}
                id={item._id}
                key={Math.random().toString()}
              />
            );
          }}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={state.CustomModal.show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                alignSelf: 'flex-start',
                //borderWidth: 0.5,
                //borderColor: 'black',
                marginBottom: 10,
              }}>
              <Text style={styles.modalText}>Ajouter au panier!</Text>
              <Text style={styles.labelStyle}>
                Nom de Produit: {state.CustomModal.productName}
              </Text>
              <Text style={styles.labelStyle}>
                Quanité: {state.CustomModal.qte}
              </Text>
              <Text style={styles.labelStyle}>
                Prix Unitaire: {state.CustomModal.unitPrice}
              </Text>
              <Text style={styles.labelStyle}>
                Prix Total: {Number(state.CustomModal.totalPrice).toFixed(3)}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'black',
                margin: 10,
              }}
            />
            <Text style={styles.labelStyle}>Quantité</Text>
            <Input
              placeholder="0.00"
              style={styles.inputStyle}
              bgColor={'#EEEEEE'}
              borderless={true}
              value={qty.toString()}
              onChangeText={text => {
                dispatch(changeQte(text));
                setQty(text);
              }}
            />
            {/* <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight> */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                alignContent: 'space-between',
                marginTop: 5,
              }}>
              <Button
                size="small"
                color="#487dff"
                style={{width: 150, marginRight: 10}}
                //style={GlobalStyles.productBtn}
                onPress={() => {
                  dispatch(hideCustomModal());
                  setQty(1);
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'poppins_bold',
                  }}>
                  Annuler
                </Text>
              </Button>
              <Button
                size="small"
                color="success"
                style={{width: 150}}
                //style={GlobalStyles.productBtn}
                onPress={() => {
                  dispatch(hideCustomModal());
                  setQty(1);
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
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductScreen;
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: 380,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  labelStyle: {
    alignSelf: 'flex-start',
    marginVertical: 2,
    fontSize: 13,
    //marginRight: 30,
    fontFamily: 'poppins_bold',
    color: 'black',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputStyle: {
    //backgroundColor: 'transparent',
    //paddingHorizontal:150,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 2,
    alignContent: 'flex-start',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'poppins_bold',
    fontSize: 17,
  },
});
