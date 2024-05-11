'use strict'
import React from 'react'
import styles from './ArticleCard.module.scss'
import useBaseUrl from '@docusaurus/useBaseUrl';

export default (({articles}) => {

    console.log("Rendering Article");

    return (
        <div className="module articles">

            <div className="module-header">
                <h1 dangerouslySetInnerHTML={{
                    __html: articles.title
                }}></h1>
            </div>

            <div className="module-content">

                {articles.articles.map((article, idx) => <div key={'article.' + idx} className="article article-content">
                    <a href={article.href}>
                        <img src={useBaseUrl(article.image)} alt={article.title}/>
                        <div className="article-text">
                            <h3>{article.title}</h3>
                            <p>
                                <i className="fa fa-user"></i>
                                {article.user}
                                <i className="fa fa-clock-o"></i>
                                {article.date}
                            </p>
                            <p>{article.summary}</p>
                        </div>
                    </a>
                </div>)}

            </div>
        </div>
    );
});
