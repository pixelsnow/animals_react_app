import classes from "./Card.module.css";
/* import "./Card.module.css"; */

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img
        src={`https://source.unsplash.com/400x400/?${props.name}`}
        alt={props.name}
      />
      <button
        className={classes.delete_btn}
        onClick={() => props.delete(props.name)}
      >
        X
      </button>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <span className="">♥ {props.likes}</span>
        <button
          className={classes.like_btn}
          onClick={(e) => props.like(props.name)}
        >
          Like
        </button>
        <button
          className={classes.unlike_btn}
          onClick={() => props.unlike(props.name)}
        >
          Unlike
        </button>
      </div>
    </div>
  );
};

export default Card;
