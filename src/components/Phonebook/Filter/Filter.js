import '../Filter/filter.css';
// import { filterContact } from 'redux/contactSlice';
export default function Filter() {
  // { state, onChange }
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        // onChange={onChange}
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
        "
        required
        // value={state.filter}
      />
    </>
  );
}
