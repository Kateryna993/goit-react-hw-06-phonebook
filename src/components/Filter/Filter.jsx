import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/actions/contacts';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.filterContainer}>
      <h3>Find contacts by name</h3>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
