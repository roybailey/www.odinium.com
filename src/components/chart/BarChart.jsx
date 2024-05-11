'use strict'
import React from 'react'

import styles from './BarChart.module.scss'


const BarChart = ((props) => {

    const {dataset, levels} = props;

    console.log("Rendering BarChartHorizontal");

    return (
        <div className={"module bar-chart "+(props.className || '')}>

            <div className={styles.bar_chart_header}>
                <h1>{props.title}</h1>
            </div>

            {[props.display].filter((display) => display === "horz").map(() => <ul key="horzChart" style={{
                display: "show"
            }} className={styles.bar_chart_horz}>
                {dataset.map((data, idx) => <li key={'horz.' + idx}>
                    <div className={styles.bar_chart_horz__bar} style={{
                        width: data.percentage + '%'
                    }}>
                        <span className={styles.bar_chart_horz__value}>{data.skill}</span>
                        <span className={styles.bar_chart_horz__percentage}>{data.rating}</span>
                    </div>
                </li>)}
            </ul>)}

            {[props.display].filter((display) => display === "vert").map(() => <ul key="vertChart" style={{
                display: "show"
            }} className={styles.bar_chart_vert}>
                {dataset.map((data, idx) => <li key={'vert.' + idx} style={{
                    width: (100 / dataset.length) + '%',
                    margin: 0
                }}>
                    <div className={styles.bar_chart_vert__bar} style={{
                        height: data.percentage + '%'
                    }}>{data.skill}</div>
                </li>)}

                {levels.map((level, idx) => <div key={'level.' + idx}>
                    <div className={styles.bar_chart_vert__label_box} style={{
                        bottom: level.level + '%'
                    }}>{level.title}</div>
                    <div className={styles.bar_chart_vert__label_line} style={{
                        bottom: level.level + '%'
                    }}></div>
                </div>)}
            </ul>)}

            <div className="module-footer">
                <p>{props.footnote}</p>
            </div>
            
        </div>
    );
});


export default BarChart;
