import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Statistics.module.css';

const Statistics = ({ stat = { good: 0, neutral: 0, bad: 0 }, total = 0, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.statistics__title}>Statistics</h2>
      <ul className={styles.statistics__list}>
        {Object.entries(stat).map(([key, value]) => (
          <li className={styles.statistics__item} key={shortid.generate()}>
            <span className={styles.statistics__name}>{key}: </span>
            <span>{value}</span>
          </li>
        ))}
        <li className={styles.statistics__item} key={shortid.generate()}>
          <span>Total: </span>
          <span>{total}</span>
        </li>
        <li className={styles.statistics__item} key={shortid.generate()}>
          <span>Positive feedback: </span>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  stat: PropTypes.object.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
