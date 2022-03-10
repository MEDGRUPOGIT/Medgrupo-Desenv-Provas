import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./Card.css";
import CircularProgress from "../CircularProgress/CircularProgress";

const Card = ({ props }) => {
  const [info, randomWeek] = props;
  const { week, firstSubject, secondSubject } = info;
  const [isCardActive, setIsCardActive] = useState(false);
  const [flip, setFlip] = useState(false);

  const activateCard = () => {
    if (week === randomWeek) setIsCardActive(true);
  };

  const flipCard = () => {
    setFlip(!flip);
  };

  useEffect(() => {
    activateCard();
  });

  return (
    <div 
      className={ isCardActive ? "card--state-active" : "card--state-inactive"}
    >
      <div className="card--week-container">
        <p>Semana</p>
        <h1>{ week }</h1>
        <button type="button" onClick={ flipCard }>
          { flip ? `-` : `+` }
        </button>
      </div>
      <CircularProgress
        text={ firstSubject.name }
        number={ firstSubject.number }
        progress={ firstSubject.progress }
      />
      <CircularProgress
        text={ secondSubject.name }
        number={ secondSubject.number }
        progress={ secondSubject.progress }
      />
    </div>
  );
};

Card.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.arrayOf(PropTypes.object),
    randomWeek: PropTypes.number,
  })).isRequired,
};

export default Card;
