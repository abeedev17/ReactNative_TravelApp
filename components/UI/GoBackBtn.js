import {StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';

const GoBackBtn = props => {
  const navigation = useNavigation();

  return (
    <Pressable style={[styles.backbtnContainer, props.style]} onPress={()=> {navigation.goBack()}} >
      <Image source={GlobalImages.backbtn} style={[GlobalStyles.imageFull]} />
    </Pressable>
  );
};

export default GoBackBtn;

const styles = StyleSheet.create({
  backbtnContainer: {
    position :'absolute',
    top: 20,
    left : 20,
    width: 41,
    height: 41,
    zIndex : 100,
  },
});
