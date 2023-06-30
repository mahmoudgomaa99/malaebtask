import {View, FlatList, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Header from './components/Header';
import {useSelector} from 'react-redux';
import {selectContacts, selectSelectedContacts} from 'redux/contacts';
import {getSortedContacts} from 'src/utils/contacts';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Contact} from 'react-native-contacts';
import ContactItem from './components/ContactItem';
import SelectedContact from './components/SelectedContactInfo';
import {height} from 'values/Dimensions';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const contacts = useSelector(selectContacts);
  const selectedContacts = useSelector(selectSelectedContacts);

  return (
    <View style={styles.container}>
      <Header setSearchText={setSearchText} />
      {selectedContacts?.length > 0 && (
        <FlatList
          contentContainerStyle={{width: Dimensions.get('window').width}}
          horizontal
          data={selectedContacts}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: {item: Contact}) => (
            <SelectedContact item={item} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
      <View style={{height: height(147)}}>
        <KeyboardAwareFlatList
          keyboardShouldPersistTaps="handled"
          data={getSortedContacts(contacts, searchText)}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}: {item: Contact}) => <ContactItem item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;
