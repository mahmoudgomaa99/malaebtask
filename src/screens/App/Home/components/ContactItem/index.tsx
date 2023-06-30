import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {Contact} from 'react-native-contacts';
import {checkboxStyles, styles} from './styles';
import assets from 'src/assets';
import {useAppDispatch} from 'redux/store';
import Contacts, {selectSelectedContacts} from 'redux/contacts';
import {useSelector} from 'react-redux';
import Svg from 'components/atoms/Svg';

const ContactItem = ({item}: {item: Contact}) => {
  const dispatch = useAppDispatch();
  const selectedContacts = useSelector(selectSelectedContacts);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={
            item?.thumbnailPath ? {uri: item.thumbnailPath} : assets.profile
          }
          style={styles.profileImg}
        />
        <View style={styles.textContainer}>
          <Text style={{color: '#fff'}}>
            {item?.givenName + ' ' + item?.familyName}
          </Text>
          <View style={styles.line} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (selectedContacts.indexOf(item) === -1) {
            dispatch(Contacts.addSelectedContact({contact: item}));
          } else {
            dispatch(Contacts.removeSelectedContact({contact: item}));
          }
        }}>
        <View
          style={
            checkboxStyles(selectedContacts.indexOf(item) !== -1).checkBox
          }>
          {selectedContacts.indexOf(item) !== -1 && (
            <Svg name="check" size={19} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;
