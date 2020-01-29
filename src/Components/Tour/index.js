import React, { useState } from "react";

import "./tour.scss";

const Tour = ({ tour, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, city, img, name, info } = tour;

  const isShow = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="pic of the tour" />
        <span className="close-btn" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={isShow}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
