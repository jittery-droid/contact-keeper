import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-4343-0912',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Mr Test',
        email: 'test@gmail.com',
        phone: '123-123-1234',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Mrs Test',
        email: 'testlady@gmail.com',
        phone: '123-123-1223',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update contact
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // filter contacts
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
