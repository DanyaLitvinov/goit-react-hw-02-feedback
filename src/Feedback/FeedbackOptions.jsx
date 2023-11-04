import style from './FeedbackOptions.module.css';
import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={style.feedback}>
      <h1 className={style.feedback__title}>Please leave feedback</h1>
      <div className={style.feedback__buttons}>
        {options.map((btn) => (
          <button
            className={style.feedback_buttons}
            value={btn}
            key={btn}
            type="button"
            onClick={(e) => onLeaveFeedback(e)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
