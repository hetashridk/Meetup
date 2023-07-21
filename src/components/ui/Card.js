import classes from "./Card.module.css";

function Card(props) {

    // first custom component which we can wrapper around JSX content
    return <div className={classes.Card}>{props.children}</div>;

    // children is a special props which every component received by default
    // and children always hold the content which is passed between the opening and closing component text 

}

export default Card;