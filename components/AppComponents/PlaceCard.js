import {StyleSheet, Text, View, Dimensions, Pressable, ImageBackground, Image} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

const {width, height} = Dimensions.get('screen');

/*
@ props
- item 
- onPress
- placeCardStyle

*/

const PlaceCard = ({item,placeCardStyle, onPress}) => {
  return (
    <Pressable style={[styles.placeCard , placeCardStyle] } onPress={onPress}>
      <ImageBackground
        source={{uri: item.images[0]}}
        style={[styles.placeCardImgBackground]}>
        <View style={[styles.placeCardHeader]}>
          <View style={[styles.placeCategory]}>
            <Text style={[styles.placeCategoryText]}>{item.category}</Text>
          </View>
          <View style={[styles.savePlacebtn]}>
            <Image
              style={[styles.savePlaceIcon]}
              source={GlobalImages.bookmarkIcon}
            />
          </View>
        </View>
        <View style={[styles.placeCardBody]}>
          <Text style={[styles.placeName]}>{item.placeName}</Text>
          <Text style={[styles.placeLocation]}>{item.location}</Text>
        </View>
        <View style={[styles.placeCardfooter]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={GlobalImages.starIcon} />
            <Text style={[styles.textM]}>{item.rating}</Text>
          </View>
          <Text style={[styles.textM]}>{item.price} / week</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  placeCard: {
    width: width - 100,
    height: height / 4,
    borderRadius: 10,
    marginRight: 20,
  },
  placeCardImgBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  placeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  placeCategory: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: GlobalColors.primaryColor,
    borderRadius: 5,
  },
  placeCategoryText: {
    color: GlobalColors.lightColor1,
  },
  savePlacebtn: {
    backgroundColor: GlobalColors.lightColor1,
    opacity: 0.5,
    padding: 5,
    borderRadius: 2,
  },
  savePlaceIcon: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  placeCardBody: {
    alignItems: 'center',
  },
  placeName: {
    color: GlobalColors.lightColor1,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  placeLocation: {
    color: GlobalColors.lightColor1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  placeCardfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textM: {
    color: GlobalColors.lightColor1,
    marginLeft: 4,
    fontWeight: 'bold',
  },
});
