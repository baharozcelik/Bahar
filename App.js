import React from 'react';
import type {Node} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Slider from './components/Slider.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBar from './components/SearchBar.js';
import Screen from './components/Screen.js';

const images = [
  'https://i.dr.com.tr/pimages/Content/Uploads/LandingPage/2021-LP/dr/indirimli-kitaplar/mayis/img1.jpg',
  'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0621_d_u_x_851x373_cep_telefonu.jpg',
  'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0521_d_u_x_851x373_haziran_oyuncak_lp.jpg',
  'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0521_d_u_x_851x373_kobo_elipsa_on_siparis_rev.jpg',
  'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0521_d_u_x_851x373_haftanin_yayinevi_redhouse.jpg'
]

const dataList = [{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'}]

export default class App extends React.Component {

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.item} >
        <Text>{item.key}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={style.container}>
        <Text>Hello Slider</Text>
        <Screen>
          <SearchBar/>
        </Screen>
        <Slider images={images}/>
        <FlatList
          data={dataList}
          renderItem={this._renderItem}
          keyExtractor={(item,index) => index.toString()}
        ></FlatList>
      </View>

    )
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 20
  },
})

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#3232ff',
     // alignItems: 'center',
    //  justifyContent: 'flex-end',
      height:20
    }
})
