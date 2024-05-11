'use strict'
import React from 'react'
import { DivIfPresent } from '../_common'
import styles from './BusinessCard.module.scss'
import SocialMediaList from "../section/SocialMediaList";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default (({className, name, avatar, title, social, address}) => {

    console.log("Rendering BusinessCard");

    return (
        <div className={[className, "card", styles.card].join(' ')}>
            <div className={"card__header " + styles.header}>
                <div className={"avatar " + styles.avatar}>
                    <DivIfPresent show={avatar}>
                        <img className="avatar__photo" src={useBaseUrl(avatar)}/>
                    </DivIfPresent>
                    <div className="avatar__intro">
                        <div className="avatar__name">{name}</div>
                        <small className="avatar__subtitle">
                            {title}
                        </small>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className="col col--12">
                    <SocialMediaList social={social} showText='true' vert='true'/>
                </div>
            </div>
        </div>
    );
});
