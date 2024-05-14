import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Page from './styledComponents/Page';

export const App = () => {
  // Estado para almacenar los contactos y el filtro de búsqueda
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // Al montar el componente, cargar los contactos desde el localStorage
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // Al actualizar el estado de los contactos, guardarlos en el localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Función para agregar un nuevo contacto
  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  // Función para manejar cambios en el filtro de búsqueda
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  // Función para eliminar un contacto
  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  // Filtrar los contactos según el filtro de búsqueda
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Page>
      <h1>Phonebook</h1>
      {/* Componente para agregar un nuevo contacto */}
      <ContactForm onAddContact={addContact} />
      <div>
        <h2>Contacts</h2>
        {/* Componente para filtrar los contactos */}
        <Filter filter={filter} onChange={handleFilterChange} />
        {/* Componente para mostrar la lista de contactos */}
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </Page>
  );
};
