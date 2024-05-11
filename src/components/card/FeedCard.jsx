'use strict'
import React from 'react'
import { DivIfPresent } from '../_common'
import styles from './FeedCard.module.scss'
import useBaseUrl from "@docusaurus/useBaseUrl";

export default (({className, title, author, avatar, date, image, message}) => {

    console.log("Rendering FeedCard");

    return (
        <div className={[className, "card", styles.card].join(' ')}>
            <div className={"card__header " + styles.header}>
                <div className={"avatar " + styles.avatar}>
                    <DivIfPresent show={avatar}>
                        <img className="avatar__photo" src={useBaseUrl(avatar)} />
                    </DivIfPresent>
                    <div className="avatar__intro">
                        <div className="avatar__name">{title}</div>
                        <small className="avatar__subtitle">
                            {author} {date}
                        </small>
                    </div>
                </div>
            </div>
            <div className="card__image">
                <img src={useBaseUrl(image)} alt={title} title={title}/>
            </div>
            <div className={"card__footer " + styles.footer}>
                <div className={"button-group button-group--block " + styles.button_group}>
                    <button className="button">Like</button>
                    <button className="button">Comment</button>
                    <button className="button">Share</button>
                </div>
            </div>
        </div>
    );
});
