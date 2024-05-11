'use strict'
import React from 'react'

import styles from './BarChartRating.module.scss'


export default (({ dataset }) => {

  const RatingBar = ({ index, rating }) => {
    return(
      <li>
        <p>
          <span className={styles.skill__title} data-info={rating.description}>{rating.title}</span>
          <span className={styles.skill__description} dangerouslySetInnerHTML={{__html: rating.description}}></span>
        </p>
        <div className={styles.bar}>
            {[...Array(rating.length)].map((ignore, barIndex) =>
              <div key={barIndex} className={(barIndex <= rating.value)? styles.full : styles.empty} style={{width:(100/rating.length)+'%'}}></div>
            )}
        </div>
      </li>
    );
  };

  console.log("Rendering BarChartRating");

  return (
      <div className={styles.chart}>

          <div>
              <main>
                  <h2 className={styles.chart_text} dangerouslySetInnerHTML={{__html: dataset.title}}></h2>
                  <p className={[styles.chart_description,"fadeIn"].join(' ')} dangerouslySetInnerHTML={{__html: dataset.description}}></p>
                  <div className="section ratings">
                      <div className="column">
                        <ul className={styles.chart_list}>

                          {dataset.ratings.map((rating,idx)=>
                            <RatingBar key={'bar'+idx} index={(idx+1)} rating={rating} />
                          )}

                        </ul>
                      </div>
                  </div>
              </main>
          </div>
      </div>
  );
});


