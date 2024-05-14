import React, { useState } from 'react';
import Form from './styledComponents/Form';
import Input from './styledComponents/Input';
import Button from './styledComponents/Button';
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
  // Estado para el nombre y número del nuevo contacto
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Función para manejar cambios en los campos de entrada
  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = e => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    // Llamar a la función proporcionada con el nuevo contacto
    onAddContact({ id, name, number });
    // Limpiar los campos de nombre y número
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre */}
      <Input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
        required
      />
      {/* Campo de entrada para el número */}
      <Input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={handleChange}
        // Validación del formato del número de teléfono
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      {/* Botón para enviar el formulario */}
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
