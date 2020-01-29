import React, { useState } from "react";

import Tour from "../Tour";
import { tourData } from "../../tourData";

import "./tourlist.scss";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = id => {
    const sortedTours = tours.filter(tour => tour.id !== id);
    setTours(sortedTours);
  };
  return (
    <section className="tourList">
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default TourList;
