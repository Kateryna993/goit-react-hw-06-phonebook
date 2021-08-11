// import { useState } from 'react';
import ContactForm from './components/ContactForm/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
// import contactsList from './data/contacts.json';
// import useLocalStorage from './hooks/LocalStorage.jsx';
// import shortid from 'shortid';
import styles from './App.module.css';

export default function PhoneBookApp() {
  // const [contacts, setContacts] = useLocalStorage('contacts', contactsList);
  // const [filter, setFilter] = useState('');

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   contacts.find(contact => contact.name === name || contact.number === number)
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts(prevContacts => [contact, ...prevContacts]);
  // };

  // const deleteContacts = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const onFilterChange = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const handleFilteredContacts = contacts => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <div>
      <h1 className={styles.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
