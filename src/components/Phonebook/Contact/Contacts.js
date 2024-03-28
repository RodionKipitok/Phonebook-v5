import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../../redux/contactSlice';
import '../Contact/contact.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(statu => statu.contacts.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.contacts.filter);
  console.log(filter);

  const filteredItems = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  console.log(filteredItems);

  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {filteredItems.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                dispatch(removeContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
