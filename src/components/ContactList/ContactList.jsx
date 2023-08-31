import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const data = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getFilteredNames = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      <List>
        {getFilteredNames().map(option => {
          return <ContactListItem key={option.id} option={option} />;
        })}
      </List>
    </div>
  );
};
