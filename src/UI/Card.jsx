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
        X
      </button>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <span className={classes.heart}>♥ {props.likes}</span>
        <button className={classes.like_btn} onClick={props.like}>
          Like
        </button>
        <button className={classes.unlike_btn} onClick={props.unlike}>
          Unlike
        </button>
      </div>
    </div>
  );
};

export default Card;
