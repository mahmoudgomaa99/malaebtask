import {StatusBar, Text, View, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import COLORS from 'values/colors';
import Svg from 'components/atoms/Svg';
import { useSelector } from 'react-redux';
import { selectContacts, selectSelectedContacts } from 'redux/contacts';

const Header = ({
  setSearchText,
}: {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const contacts = useSelector(selectContacts);
  const selectedContacts = useSelector(selectSelectedContacts);
  return (
    <View style={styles.headerContainer}>
      <StatusBar animated={true} barStyle="light-content" />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.cancelText}>Cancel</Text>
        <View style={styles.addParticipantContainer}>
          <Text style={styles.addParticipantText}>Add Participants</Text>
          <Text style={styles.counterText}>{`${selectedContacts?.length||0} / ${contacts.length}`}</Text>
        </View>
        <Text style={styles.nextText}>Next</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor={COLORS.lightGrey}
          onChangeText={setSearchText}
        />
        <Svg name="search" style={styles.searchIcon} size={24} />
      </View>
    </View>
  );
};

export default Header;
