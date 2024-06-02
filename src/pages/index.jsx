'use strict'
// react
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import styles from './index.module.scss'

import
{
    HorizontalBar,
    Section,
    MainLogo,
    MainHeader,
    CarouselContainer,
    ServiceModule,
    TabPanel,
    ContactModule,
    TagMap,
} from '../components/library'



export default function Homepage() {

    const DEPLOY = process.env.NODE_ENV;
    const API_BASE = (DEPLOY === "production")? "https://api.odinium.com" : "http://localhost:8181";

    const social = {
        twitter: "http://twitter.com/roybaileybiz",
        linkedin: "https://www.linkedin.com/in/roybailey",
        github: "https://github.com/roybailey"
    };

    const profile = {
        image: "img/gear.png",
        title: "Odinium Ltd",
        description: "Software Consultancy",
    };

    const WebsiteMenuBar = (props) =>
        <MainHeader menu={[
            { href: "#ABOUT", title: "About" },
            { href: "#SERVICES", title: "Services" },
            { href: "#CONTACT", title: "Contact" },
        ]} profile={profile} sticky="true"/>

    const WebsiteCarousel = (props) =>
        <CarouselContainer slideshow={{
            images: [
                {
                    title: "Our <span>Skills</span>",
                    image: "/img/backdrops/hands-coding.jpg",
                    subtitle: "Management & Software Engineering",
                    button: {
                        href: '#SERVICES',
                        title: 'Find out more...'
                    }
                },
                {
                    title: "Our <span>Technologies</span>",
                    image: "/img/backdrops/desktop-charts.jpg",
                    subtitle: "Fit For Purpose",
                    button: {
                        href: '#ABOUT',
                        title: 'Find out more...'
                    }
                },
                {
                    title: "Contact <span>US</span>",
                    image: "/img/backdrops/coding-screen.jpg",
                    subtitle: "Good talent is hard to find",
                    button: {
                        href: '#CONTACT',
                        title: 'Get in touch...'
                    }
                }
            ]
        }} />

    // ------------------------------------------------------------
    // CONTACT
    // ------------------------------------------------------------

    const WebsiteContact = (props) => <ContactModule
            to={props.to}
            apiUrl={props.apiUrl}
            action={props.action}
            method={props.method}
            contact={{
            title: 'Contact US',
            footnote: `How may we help you?`,
            follow: 'Follow The Founder',
            address: [
                "London, UK",
                "+44 7710 379914",
            ],
            social: social,
        }}
        />

    //
    // ABOUT
    //

    const KeyStrengths = (props) =>
        <ServiceModule services={[
            {
                title: "User Centric", icon: "fa fa-user", description:
                    `Very client focused and prefer talking directly with customers.
         Always delivering pragmatic commercial solutions based on constraints.`
            },
            {
                title: "Quality Coding", icon: "fa fa-code", description:
                    `Lead by example, hands on coding, working alongside existing
         teams to ensure knowledge sharing, coaching, and best outcome.`
            },
            {
                title: "Simple Solutions", icon: "fa fa-thumbs-up", description:
                    `Over two decades of experience designing solutions.
         Good software should reduce complexity.`
            },
            {
                title: "Responsive", icon: "fa fa-comments", description:
                    `Agile delivery with a responsive collaborative approach to
         technical and delivery challenges.`
            }
        ]}/>


    // ------------------------------------------------------------
    // SKILLS
    // ------------------------------------------------------------

    const Services = (props) =>
        <TabPanel title="See the <span>Services</span> we offer" tabs={[
            {
                id: "sectionA", title: "Strategy", icon: "fa fa-lightbulb-o", description:
                    `Looking into your existing IT systems and products to help your
         define a strategy to get where you need to be.`
            },
            {
                id: "sectionB", title: "Planning", icon: "fa fa-compass", description:
                    `Working alongside your programme and project managers to ensure
         realistic and approriate planning.`
            },
            {
                id: "sectionC", title: "Engineering", icon: "fa fa-cogs", description:
                    `Directly contributing to the code with emphasis on creating
         a structure for all developers to gain productivity.`
            },
            {
                id: "sectionD", title: "Trajectory", icon: "fa fa-paper-plane", description:
                    `Building momentum through understanding and creating the
         foundations for long term success.`
            },
            // {
            //   id: "sectionE", title: "Workflow", icon: "fa fa-line-chart", description:
            //   `Fully agile approach (Kanban preferred) to ensure teams are
            //    productive, learning, collaborating, and improving.`
            // },
        ].map((data) => {
            data.href = "#" + data.id;
            return data;
        })}/>


    const WebsiteFooter = (props) =>
        <div id="footer" className={styles.footer}>
            <div className={styles.footer__content}>
                <MainLogo profile={profile} />
                <p>
                    Copyright (c) {new Date().getFullYear()} <a href="http://www.odinium.com">Odinium Ltd</a>, a private UK company providing consultancy on Software projects.
                    <br/>
                    Get in touch if you need to hire an experienced Management and Software Engineering team.
                </p>
            </div>
        </div>;


    // ------------------------------------------------------------
    // exported website partials
    // ------------------------------------------------------------

    const HomePage = ((props) => {
        return(
            <div>

                <WebsiteMenuBar />
                <div className={styles.menu_margin}/>
                <WebsiteCarousel />

                <Section id="ABOUT">
                    <KeyStrengths />
                </Section>

                <Section id="SERVICES">
                    <Services />
                </Section>

                <Section id="CONTACT">
                    <WebsiteContact to="odinium.com" apiUrl={API_BASE+"/email/v1/contact"}/>
                </Section>

                <WebsiteFooter />
            </div>
        );
    });

    // return {
    //     title: 'Odinium Ltd - Technical Management & Software Engineering Consultancy',
    //     body: ReactDOMServer.renderToStaticMarkup(<HomePage />)
    // };
    return(
        <HomePage />
    );

}
