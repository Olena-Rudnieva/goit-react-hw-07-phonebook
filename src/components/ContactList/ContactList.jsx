import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <h2>Contacts</h2>
      <Filter />
      <List>
        {contacts.map(option => {
          return <ContactListItem key={option.id} option={option} />;
        })}
      </List>
    </div>
  );
};
