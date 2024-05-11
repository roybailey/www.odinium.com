'use strict'
import React from 'react'
import styles from './PhotoCard.module.scss'
import useBaseUrl from "@docusaurus/useBaseUrl";


export default (({className, image, title, message}) => {

    console.log("Rendering PhotoCard");

    return (
        <div className={[className, "card", styles.card].join(' ')}>
            <div className="card__image">
                <img
                    src={useBaseUrl(image)}
                    alt={title}
                    title={title}/>
            </div>
            <div className="card__body">
                <h4>{title}</h4>
                <small>
                    {message}
                </small>
            </div>
            <div className="card__footer">
                <button className="button button--primary button--block">Visit</button>
            </div>
        </div>
    );
});
