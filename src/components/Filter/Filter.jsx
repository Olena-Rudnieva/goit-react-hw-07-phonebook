import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => dispatch(addFilter(event.target.value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onFilterChange} />
    </Label>
  );
};
