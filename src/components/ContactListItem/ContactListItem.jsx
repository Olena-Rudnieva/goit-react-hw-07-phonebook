import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

export const ContactListItem = ({ option }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContacts(option.id));

  return (
    <Item>
      <span>
        {option.name}: {option.number}
      </span>
      <Button type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  option: PropTypes.object.isRequired,
};
