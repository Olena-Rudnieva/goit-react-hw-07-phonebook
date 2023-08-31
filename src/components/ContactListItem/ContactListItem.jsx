import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactListItem = ({ option }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(option.id));

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
