import {useEffect, useState} from 'react';
import Contacts, {Contact} from 'react-native-contacts';

export const getAllContacts = async () => {
  try {
    const contacts = await Contacts.getAll();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[] | undefined>();

  useEffect(() => {
    (async function getContacts() {
      const newContacts = await getAllContacts();
      setContacts(newContacts);
    })();
  }, []);

  return contacts;
};