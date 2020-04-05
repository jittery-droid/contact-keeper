import React, { useReducer } from 'react';
import uuid from 'uuid';
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
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  // Add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
