'use strict'
import React from 'react'

import styles from './TagMap.module.scss'

export default ((props) => {

    const {dataset} = props;

    const TagItem = (props) => {
      let alt= props.alt || props.title;
      let sizeClassName = props.size === 'l'? styles.item_size_l :
          props.size === 'm'? styles.item_size_m :
              props.size === 's'? styles.item_size_s : styles.item_size_xs;
      return (
      <div className={[styles.item, sizeClassName].join(' ')}>
        <a href={props.href} alt={alt}>
          {(props.image)?
              <img src={props.image} alt={alt} />
          : ""}
          <p className={styles.item_title}>{props.title}</p>
        </a>
      </div>
      );
    };

    console.log("Rendering TagMap");

    return (
        <div className={styles.tag_map}>

            {dataset.map((group,idx)=>
              <div key={"tag-group-"+idx} className={[styles.group, (idx % 2 === 0)? styles.tag_group_left :  styles.tag_group_right].join(' ')}>
                <h4>{group.group}</h4>
                {group.items.map((data,idx)=>
                    <TagItem key={'tag-'+idx} index={idx} {...data} />
                )}
                <hr></hr>
              </div>
            )}

        </div>
    );
});
