'use strict'
import React from 'react'
import makeHtml from '../_markdown'
import { DivIfPresent } from '../_common'
import styles from './BulletList.module.scss'


export default ((props) => {

    const {dataset} = props;

    console.log("Rendering BulletList for "+props.namespace);

    return (
        <div className={"module "+styles.bullet_list}>

            <div className="module-header">
                <h1>{props.title}</h1>
            </div>

            <div className="module-content">

                {dataset.map((data, idx) => <div key={'bullet.' + idx} className={styles.bullet_item}>
                    <div className={styles.bullet_center}>{data.date}</div>
                    <div className={styles.bullet_item__rightArea}>
                        <div className={styles.arrowpart}></div>
                        <div className={styles.bullet_content}>
                            <div className={styles.bullet_tag} dangerouslySetInnerHTML={{
                                __html: makeHtml(data.subtitle)
                            }}></div>
                            <h4 className={styles.bullet_content__h4}>{data.title}</h4>
                            <p className={styles.bullet_content__p} dangerouslySetInnerHTML={{
                                __html: makeHtml(data.description)
                            }}></p>
                        </div>
                    </div>
                </div>)}

            </div>
        </div>
    );
});
