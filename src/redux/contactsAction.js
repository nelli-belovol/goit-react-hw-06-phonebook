import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: shortid.generate(),
    },
  };
});
export const delContact = createAction('contacts/del');
export const changeFilter = createAction('contacts/filter');
