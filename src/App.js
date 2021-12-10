import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactsForm from 'Components/ContactsForm/ContactsForm';
import ContactsList from 'Components/ContactList/ContactList';
import Filter from 'Components/Filter/Filter.jsx';

function App() {
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter title="Find contacts by name" />
      <ContactsList />
    </div>
  );
}

export default App;
