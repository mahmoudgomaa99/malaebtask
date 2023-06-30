import {Contact} from 'react-native-contacts';

export const getSortedContacts = (contacts: Contact[], searchText?: string) => {
  const sortedContacts = [...contacts].sort((a, b) =>
    a.givenName.localeCompare(b.givenName),
  );
  let searchedArray;
  if (searchText) {
    searchedArray = sortedContacts.filter(item =>
      item.givenName.includes(searchText),
    );
  }
  return searchText ? searchedArray : sortedContacts;
};
