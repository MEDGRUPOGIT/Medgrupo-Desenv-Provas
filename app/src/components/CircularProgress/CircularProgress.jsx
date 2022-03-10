import React from "react";
import PropTypes from 'prop-types';
import "./CircularProgress.css";

const CircularProgress = (props) => {
  const { text, number, progress } = props;

  return (
    <section className="circle--container">
      <svg>
        <circle cx="50" cy="50" r="50" />
        <circle
          className="circle--progress-bar"
          cx="50"
          cy="50"
          r="50"
          strokeDasharray="320"
          strokeDashoffset={ progress }
        />
        <g>
          <text x="30" y="55">{ text }</text>
          <text x="46" y="85">{ number }</text>
        </g>
      </svg>
    </section>
  );
};

CircularProgress.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
}

export default CircularProgress;
