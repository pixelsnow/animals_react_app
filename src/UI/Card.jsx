import React from "react";
import classes from "./Card.module.css";
/* import "./Card.module.css"; */

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img
        src={`https://source.unsplash.com/400x400/?${props.name}`}
        alt={props.name}
      />
      <button className={classes.delete_btn} onClick={props.delete}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className={classes.info}>
        <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
        <div className={classes.like_buttons}>
          <button className={classes.unlike_btn} onClick={props.unlike}>
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className={classes.heart}>
            {props.likes < 0 && (
              <span
                role="img"
                aria-label="broken-heart"
                className={classes.heart_icon}
              >
                &#128148;
              </span>
            )}
            {props.likes >= 0 && (
              <span
                role="img"
                aria-label="heart"
                className={classes.heart_icon}
              >
                &#10084;&#65039;
              </span>
            )}
            {props.likes}
          </span>
          <button className={classes.like_btn} onClick={props.like}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
