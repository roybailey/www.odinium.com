'use strict'
import React from 'react'
import useBaseUrl from "@docusaurus/useBaseUrl";
import Carousel from 'react-bootstrap/Carousel';

import styles from './TestimonialModule.module.scss'


export default ((props) => {

    const { testimonials } = props;

    console.log("Rendering TestimonialModule");

    return (
        <Carousel className={styles.testimonial_area} variant='dark'>
            {testimonials.map((item, idx) =>
                <Carousel.Item key={"carousel-indicator-" + idx} className={styles.testimonial_section}>
                    <img className={styles.testimonial__image} src={useBaseUrl(item.image)} alt={item.title}/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                    <h1 dangerouslySetInnerHTML={{__html: item.title}}></h1>
                    <h3>{item.description}</h3>
                </Carousel.Item>
            )}
        </Carousel>
    )

});
