import React from 'react';
import ListStyled from './styledComponents/ListStyled';
import ContactStyled from './styledComponents/ContactStyled';
import Button from './styledComponents/Button';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {/* Encabezado de la lista de contactos */}
      <h2>Contact List</h2>
      {/* Lista de contactos */}
      <ListStyled>
        {/* Mapear y renderizar cada contacto */}
        {contacts.map(contact => (
          <ContactStyled key={contact.id}>
            {/* Nombre y número del contacto */}
            {contact.name} - {contact.number}
            {/* Botón para eliminar el contacto */}
            <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
          </ContactStyled>
        ))}
      </ListStyled>
    </div>
  );
};

export default ContactList;
