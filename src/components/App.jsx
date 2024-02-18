import { useState, useEffect } from 'react';
import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';

function App() {
  return (
    <>
      <PhonebookForm />
      <Filter />
      <Contacts />
    </>
  );
}

export default App;
