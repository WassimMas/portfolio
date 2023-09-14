import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonial</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever </h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic porro
            tenetur ab incidunt quaerat voluptate expedita eum ipsum consequatur
            ducimus dolorem unde laboriosam est, cupiditate ipsa saepe odit,
            impedit laudantium!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever </h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic porro
            tenetur ab incidunt quaerat voluptate expedita eum ipsum consequatur
            ducimus dolorem unde laboriosam est, cupiditate ipsa saepe odit,
            impedit laudantium!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever </h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic porro
            tenetur ab incidunt quaerat voluptate expedita eum ipsum consequatur
            ducimus dolorem unde laboriosam est, cupiditate ipsa saepe odit,
            impedit laudantium!
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="avatar one" />
          </div>
          <h5 className="client__name">Ernest Achiever </h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic porro
            tenetur ab incidunt quaerat voluptate expedita eum ipsum consequatur
            ducimus dolorem unde laboriosam est, cupiditate ipsa saepe odit,
            impedit laudantium!
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
