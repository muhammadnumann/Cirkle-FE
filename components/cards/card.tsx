import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
  return (
    <div className={styles.saleComponentSub}>
      {props.svg}
      <h3 className="pt-3">{props.h3}</h3>
      <p>{props.p}</p>
      <span style={props.color}>{props.span}</span>
    </div>
  );
};

export default Card;
