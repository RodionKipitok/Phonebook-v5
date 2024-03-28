import '../Filter/filter.css';
import { filterContact } from '../../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Filter() {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => {
          dispatch(filterContact(e.target.value));
        }}
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
        "
        required
        value={filterValue}
      />
    </>
  );
}
