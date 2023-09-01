import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
// import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  // const data = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const getFilteredNames = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return data.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter.toLowerCase())
  //   );
  // };

  // const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      <List>
        {/* {contacts.map(option => {
          return <ContactListItem key={option.id} option={option} />;
        })} */}
      </List>
    </div>
  );
};
