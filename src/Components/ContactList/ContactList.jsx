import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contactsAction';

import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleDelContact = id => {
    const idxContact = contacts.findIndex(contact => {
      return contact.id === id;
    });

    dispatch(actions.delContact(idxContact));
  };

  const filterContact = () => {
    const normalizeFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
    return filterContacts;
  };

  return (
    <>
      <ul className={s.contacts__list}>
        {filterContact().map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={s.contacts__button}
                onClick={() => handleDelContact(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  handleDel: PropTypes.func,
};
