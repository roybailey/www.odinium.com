'use strict'
import React from 'react'
import styles from './Card.module.scss'

export default (({className, title, message}) => {

    console.log("Rendering Card");

    return (
        <div className={[className,"card",styles.card].join(' ')}>
            <div className={"card__header "+styles.card_header}>
                <h3>{title}</h3>
            </div>
            <div className={"card__body "+styles.card_body}>
                <p>
                    {message}
                </p>
            </div>
            <div className={"card__footer "+styles.card_footer}>
                <button className="button button--block">See more...</button>
            </div>
        </div>
    );
});
