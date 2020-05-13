import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme, Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';

import {fetchAllCategories} from '../store/categories/actions';
import {setCategory} from '../store/selectedCategory/actions';
import {fetchProductsByCateg} from '../store/products/actions';
const DrawerContent = props => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentState = useSelector(state => state);
  useEffect(() => {
    dispatch(fetchAllCategories());
    //console.log(currentState);
  }, []);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection} title="PARAMETRES">
            <DrawerItem label="Accueil" />
            <DrawerItem label="Mon Panier" />
            <DrawerItem label="Mon Profil" />
            <DrawerItem label="Deconnexion" />
          </Drawer.Section>
          {currentState.categoriesReducer.map(categ => (
            <Drawer.Section
              theme={theme.colors.primary}
              style={styles.drawerSection}
              key={categ._id}
              title={categ.categoryName}>
              {categ.subCategories.map(subCateg => (
                <DrawerItem
                  label={subCateg.subName}
                  key={subCateg._id}
                  onPress={() => {
                    dispatch(
                      setCategory({
                        name: subCateg.subName,
                        id: subCateg._id,
                      }),
                    );
                    dispatch(fetchProductsByCateg(subCateg._id));
                    props.navigation.navigate('Product');
                    // props.navigation.navigate('Home');
                  }}
                />
              ))}
            </Drawer.Section>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
