import { useSelector } from 'react-redux';
import '../Contact/contact.css';

export default function Contacts() {
  const idTransfer = id => {};

  const contacts = useSelector(statu => statu.contact.contacts);
  console.log(contacts);

  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {contacts.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              // onClick={() => {
              //   idTransfer(contact.id);
              // }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
