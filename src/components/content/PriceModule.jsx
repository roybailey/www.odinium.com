'use strict'
import React from 'react'

import styles from './PriceModule.module.scss'


export default ((props) => {

    const { prices } = props;

    console.log("Rendering PriceModule");

    return (
      <div className={styles.pricingTable}>

            {prices.plans.map((plan,idx)=>
              <div key={'plan-'+idx}
                   style={{width: (100 / prices.plans.length) + '%', margin: 0}}
                   className={[
                  // "col-md-4",
                  // "col-sm-4",
                  // "col-xs-12",
                  // "first",
                  // "wow",
                  "animate__animated",
                  "animate__bounceInUp",
                  (plan.className === "featured"? styles.featured: ""),
                  styles.pricingBox
                  ].join(' ')}
              >
                  <ul>
                      <li className={styles.planTitle}>{plan.title}</li>
                      <li className={[styles.subscriptionPrice,"oswald"].join(' ')}>
                          <span className={[styles.currency,"oswald"].join(' ')}>£</span>
                          <span className={[styles.price].join(' ')}>{plan.price}</span> / {plan.frequency}
                      </li>
                      {plan.details.map((detail,idx)=>
                        <li key={'detail-'+idx} className={idx===0? "ptop10" : ""}>
                          {detail}
                        </li>
                      )}
                      <li className={[styles.last,"border-none","pbottom40"].join(' ')}>
                          {plan.bonus}
                      </li>
                      <li className={styles.signup}>
                          <a href="#" className="animate__animated">Sign Up</a>
                      </li>
                  </ul>
              </div>
            )}

      </div>
    );
});
