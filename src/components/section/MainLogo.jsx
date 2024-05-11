'use strict'
import React from 'react'
import useBaseUrl from "@docusaurus/useBaseUrl";
import SocialMediaList from './SocialMediaList'

import styles from './MainLogo.module.scss'


export default ((props) => {

    return(
      <div className={styles.mainlogo}>

          <div className={styles.mainlogo__image}>
            <img src={useBaseUrl(props.profile.image)} alt={props.profile.title}/>
          </div>

          <div className={styles.mainlogo__description}>
            <a href="/"><h1 className={styles.mainlogo__description__title} style={{margin: 0}}>{props.profile.title}</h1></a>
            <h2 className={styles.mainlogo__description__description}>{props.profile.description}</h2>
            {((props.profile.social)?
            <div className={[styles.mainlogo__social,styles.social].join(' ')}>
              <SocialMediaList social={props.profile.social} className={styles.social}/>
            </div>
            : "")}
          </div>

      </div>
    );
})
