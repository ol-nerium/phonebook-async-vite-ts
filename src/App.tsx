// import { useMemo } from 'react';

import Container from './components/Container/Constainer';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import ContactFilter from './components/ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactsForm />
      <ContactFilter />
      {loading || <ContactsList />}
      {loading && !error && <b>Request in progress...</b>}
      <p>{error}</p>
    </Container>
  );
}
