import css from './ContactsList.module.css';
import ContactItem from '@/components/ContactItem/ContactItem';
import type { contactType } from '@/utils/types';
import React, { useMemo } from 'react';

import { selectContacts } from '@/redux/contactsSlice';
import { selectNameFilter } from '@/redux/filterSlice';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue: string = useSelector(selectNameFilter);
  const visibleContacts = useMemo(() => {
    if (!filterValue.trim()) return contacts;
    const normalizeFilter = filterValue.toLowerCase().trim();

    return contacts.filter((item: contactType) => {
      const normalizeName = item.name.toLowerCase();
      return normalizeName.includes(normalizeFilter);
    });
  }, [filterValue, contacts]);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ name, number, id }: contactType) => {
        return (
          <ContactItem name={name} number={number} contactKey={id} key={id} />
        );
      })}
    </ul>
  );
};
export default React.memo(ContactsList);
