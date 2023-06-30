import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Contact} from 'react-native-contacts';
import assets from 'src/assets';
import {styles} from './styles';
import Animated, { SlideInRight} from 'react-native-reanimated';
import {useAppDispatch} from 'redux/store';
import Contacts from 'redux/contacts';

const SelectedContact = ({item}: {item: Contact}) => {
  const dispatch = useAppDispatch();
  return (
    <Animated.View style={styles.container} entering={SlideInRight}>
      <Image
        source={
          item?.thumbnailPath ? {uri: item.thumbnailPath} : assets.profile
        }
        style={styles.profileImg}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(Contacts.removeSelectedContact({contact: item}));
        }}
        style={styles.removeIcon}>
        <Image style={{width: 20, height: 20}} source={assets.cancel} />
      </TouchableOpacity>
      <Text style={styles.nameText}>{item.givenName}</Text>
    </Animated.View>
  );
};

export default SelectedContact;
