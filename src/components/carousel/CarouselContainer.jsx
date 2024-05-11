'use strict'
import React from 'react'
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Carousel } from "react-bootstrap";

import styles from './CarouselContainer.module.scss'


export default ((props) => {

    const { slideshow } = props;

    console.log("Rendering CarouselContainer "+slideshow.images.length);

    return (
        <Carousel className={styles.carousel}>
            {slideshow.images.map((item, idx) =>
                <Carousel.Item key={"carousel-indicator-" + idx} className={styles.item}>
                    <img className={styles.image} src={useBaseUrl(item.image)} alt={item.title}/>
                    <Carousel.Caption className={styles.hero}>
                        <hgroup>
                            <h1 dangerouslySetInnerHTML={{__html: item.title}}></h1>
                            <h3>{item.subtitle}</h3>
                        </hgroup>
                        {[item.button].map((button, idx) =>
                            <a key={"carousel-link-" + idx} href={button.href}>
                                <button className={styles.hero__button} role="button">{button.title}</button>
                            </a>
                        )}
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
});


const BootstrapCarousel = ((props) => {

    const {slideshow} = props;

    console.log("Rendering CarouselContainer");

    return (
        <div id="carouselShowcaseExample" className="carousel slide" data-bs-ride="carousel">
            <div className={styles.overlay}></div>
            <div className="carousel-indicators">
                {slideshow.images.map((image, idx) =>
                    <button type="button" data-bs-target="#carouselShowcaseExample" data-bs-slide-to={idx}
                            className={idx === 0 ? "active" : ""}
                            aria-current="true" aria-label={"Slide " + idx}></button>
                )}
            </div>
            <div className="carousel-inner">
                {slideshow.images.map((image, idx) =>
                    <div key={"carousel-indicator-" + idx} className={"carousel-item " + (idx === 0 ? "active" : "")}>
                        <img className="d-block w-100" src={useBaseUrl(image.image)} alt={image.title}/>
                        <div className={"carousel-caption d-none d-md-block " + styles.hero}>
                            <hgroup>
                                <h1 dangerouslySetInnerHTML={{__html: image.title}}></h1>
                                <h3>{image.subtitle}</h3>
                            </hgroup>
                            {[image.button].map((button, idx) =>
                                <a key={"carousel-link-" + idx} href={button.href}>
                                    <button className={styles.hero__button} role="button">{button.title}</button>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselShowcaseExample"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselShowcaseExample"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
});

const FancyCarousel = ((props) => {

    const {slideshow} = props;

    console.log("Rendering CarouselContainer");

    return (
        <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="5000" id="bs-carousel">

            <div className="overlay"></div>

            <ol className="carousel-indicators">
                {slideshow.images.map((image, idx) =>
                    <li key={"carousel-indicator-" + idx} data-target="#bs-carousel" data-slide-to={idx}
                        className={idx === 0 ? "active" : ""}></li>
                )}
            </ol>

            <div className="carousel-inner">
                {slideshow.images.map((image, idx) =>
                    <div key={"carousel-slide-" + idx} className={idx === 0 ? "item slides active" : "item slides"}>
                        <div className={"slide-" + (idx + 1)}></div>
                        <div className="hero">
                            <hgroup>
                                <h1 dangerouslySetInnerHTML={{__html: image.title}}></h1>
                                <h3>{image.subtitle}</h3>
                            </hgroup>
                            {[image.button].map((button, idx) =>
                                <a key={"carousel-link-" + idx} href={button.href}>
                                    <button className="btn btn-hero btn-lg" role="button">{button.title}</button>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});
