'use strict'
import React from 'react'
import useBaseUrl from "@docusaurus/useBaseUrl";
import MainLogo from './MainLogo'

import styles from './MainHeader.module.scss'


export default ((props) => {

    console.log("Rendering MainHeader "+JSON.stringify(props));

    const MainMenu = ((props)=>
            <ul className={styles.mainmenu}>
                {props.menu.map((menuitem,idx)=>
                    <li key={'menuitem.'+idx}><a href={menuitem.href}>{menuitem.title}</a></li>
                )}
            </ul>
    );

    return (
      <header className={[styles.main_header,(props.sticky === 'true'? styles.sticky: '')].join(' ')}>
          <div className={styles.main_header__row}>
              <div className={styles.main_header__content}>

                  <MainLogo profile={props.profile} />

                  <div className={styles.mobile_toggle}> <span></span> <span></span> <span></span></div>
                  {props.menu?
                  <nav className={styles.nav}>
                      <MainMenu menu={props.menu}/>
                  </nav>
                  : ''}

              </div>
          </div>
      </header>
    );
});
