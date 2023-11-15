import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Notification.module.css';

const Notification = ({ message = ' ' }) => {
  return (
    <h2 key={shortid.generate()} className={styles.notification}>
      {message}
    </h2>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
