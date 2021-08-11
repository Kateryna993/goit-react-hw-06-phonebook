import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import actions from '../../redux/actions/contacts';

function ContactList({ contactsList, deleteContacts }) {
  return (
    <ul className={styles.contactList}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contactName}>
            {name}: &nbsp;{number}
          </p>
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
//   deleteContacts: PropTypes.func,
// };

const handleFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contactsList: handleFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContacts: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
