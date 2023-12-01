import React from "react";
import "../Pages/servicecard.css";

const ServiceCard = ({img, title, category, description}) => {
  return (
    <div>
      <article class="card ">
        <div class="temporary_text">
        <img
          src={img}
          alt={title + "Service"}
          className="contrast-50 imgShadow hover:contrast-100 "
          ></img>
        </div>
        <div class="card_content">
          <span class="card_title">{title}</span>
        </div>
      </article>
    </div>
  );
};

export default ServiceCard;
