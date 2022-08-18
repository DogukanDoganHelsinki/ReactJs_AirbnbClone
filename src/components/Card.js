import React from "react";
import starPhoto from "../images/star.jpg";
import coverImg from "../images/airbnb.png";

function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} alt="cardPhoto" className="card--photo" />
      <div className="card--stats">
        <img src={starPhoto} alt="star" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) · </span>
        <span className="gray">{props.location}</span>
      </div>
      <div>
        <p>{props.title}</p>
        <p>
          <span className="bold"> From ${props.price} </span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
