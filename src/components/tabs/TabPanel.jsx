'use strict'
import React from 'react'
import styles from './TabPanel.module.scss'

import Tab from 'react-bootstrap/Tab';
import TabPane from 'react-bootstrap/TabPane';
import TabContent from 'react-bootstrap/TabContent';
import Tabs from 'react-bootstrap/Tabs';

export default ((props) => {

    console.log("Rendering TabPanel "+props.tabs.length);

    return (
        <div className={styles.tab_bar}>
            <Tabs
                defaultActiveKey="tab0"
                id="tabbar"
                className={[styles.nav_tabs].join(' ')}
            >
                {props.tabs.map((tab, idx) =>
                    <TabPane key={"tab-pane-" + idx} eventKey={"tab" + idx} className={styles.tab_pane} title={
                        <div data-toggle="tab" className={styles.tab__title}>
                            <i className={tab.icon}></i>
                        </div>
                    }>
                        <TabContent key={"tab-content-" + idx} idx={"tab" + idx}>
                            <h3 dangerouslySetInnerHTML={{__html: tab.title}}></h3>
                            <p dangerouslySetInnerHTML={{__html: tab.description}}></p>
                        </TabContent>
                    </TabPane>
                )}
            </Tabs>
        </div>
    );
});


const BackupTabPanel = ((props) => {

    console.log("Rendering TabPanel "+props.tabs.length);

    let tabBar = [];
    let tabContent = [];
    props.tabs.forEach((tab, idx) => {
        tabBar.push(
            <li key={idx} className={idx === 0? "active" : ""} style={{marginTop:0}}>
                <a data-toggle="tab" href={tab.href}>
                    <i className={tab.icon}></i>
                </a>
            </li>
        );
        tabContent.push(
            <div key={tab.id} id={tab.id} className={styles.tabPane + (idx == 0? " tab-pane fade in active" : " tab-pane fade")}>
                <h3 dangerouslySetInnerHTML={{__html: tab.title}}></h3>
                <p dangerouslySetInnerHTML={{__html: tab.description}}></p>
            </div>
        );
    });

    return (
        <div>
            <Tabs
                defaultActiveKey="tab0"
                id="tabbar"
                className={[styles.tabBar,styles.navTabs,(" mb-"+props.tabs.length)].join(' ')}
            >
                {props.tabs.map((tab, idx) =>
                <Tab eventKey={"tab"+idx} title={tab.title}>
                    <div key={tab.id} id={tab.id}>
                        <h3 dangerouslySetInnerHTML={{__html: tab.title}}></h3>
                        <p dangerouslySetInnerHTML={{__html: tab.description}}></p>
                    </div>
                </Tab>
                )}
            </Tabs>
        </div>
    );
});
