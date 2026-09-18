import React from "react";
import "./Gallery.css";

import EventImg1 from "../../../assets/eventsimage/Event1.jpg";
import EventImg2 from "../../../assets/eventsimage/Event2.jpg";
import EventImg3 from "../../../assets/eventsimage/Event3.jpg";
import EventImg4 from "../../../assets/eventsimage/Event4.jpg";
import EventImg5 from "../../../assets/eventsimage/Event5.jpeg";
import EventImg6 from "../../../assets/eventsimage/Event6.jpeg";
import EventImg7 from "../../../assets/eventsimage/Event71.jpg";
import EventImg8 from "../../../assets/eventsimage/Event8.jpg";
import EventImg9 from "../../../assets/eventsimage/Event9.jpg";
import EventImg10 from "../../../assets/eventsimage/Event10.jpg";

const Event = () => {
  return (
    <section className="events-section">
      <div className="container">
        <h1 className="events-title">Events</h1>

        <div className="event-content">
          <h2 className="event-heading">
            Distribution Utility Meet (DUM) 2024
            <br />
            Lucknow, UP
          </h2>

          <div className="event-gallery">
            <div className="event-card">
              <img src={EventImg1} alt="Event 1" />
            </div>

            <div className="event-card">
              <img src={EventImg2} alt="Event 2" />
            </div>
          </div>
        </div>


        <div className="event-content">
          <h2 className="event-heading">
            ITMA conference 12th July 2024.
            <br />
            Jaipur, Rajasthan
          </h2>

          <div className="event-gallery">
            <div className="event-card">
              <img src={EventImg3} alt="Event 1" />
            </div>

            <div className="event-card">
              <img src={EventImg4} alt="Event 2" />
            </div>
          </div>
        </div>

        <div className="event-content">
          <h2 className="event-heading">
            Elecrama 2023
          </h2>

          <div className="event-gallery">
            <div className="event-card">
              <img src={EventImg5} alt="Event 1" />
            </div>

            <div className="event-card">
              <img src={EventImg6} alt="Event 2" />
            </div>
          </div>
        </div>

        <div className="event-content">
          <h2 className="event-heading">
            Others
          </h2>

          <div className="event-gallery">
            <div className="event-card">
              <img src={EventImg7} alt="Event 1" />
            </div>

            <div className="event-card">
              <img src={EventImg8} alt="Event 2" />
            </div>
            <div className="event-card">
              <img src={EventImg9} alt="Event 2" />
            </div>
            <div className="event-card">
              <img src={EventImg10} alt="Event 2" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Event;