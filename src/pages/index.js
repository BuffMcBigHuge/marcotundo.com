import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import marco from '../assets/images/marco.jpg'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Acadium', description: 'Our website evolved into split applications that are managed by multiple teams.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Credit packages', description: 'We built subscriptions, one-time-purchases, with refund management.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Profile View', description: 'Editor with real-time saving and mobile sync.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Matching View', description: 'AI-based matching algorithm with a marketplace of > 100k users.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Messenger', description: 'Robust modern real-time messenger with uploads, live video, files, shared deskop.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Requests', description: 'Real students sending real inbounds, willing to learn on the platform.'},
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            name: "",
            email: "",
            message: ""
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePortfolio = this.handlePortfolio.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    };

    handlePortfolio = event => {
        alert(`More to complete...`);
    };

    handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch('https://2zc3z1jkxk.execute-api.us-east-1.amazonaws.com/prod', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "omit", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            //redirect: "follow", // manual, *folslow, error
            //referrer: "client", // no-referrer, *client
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name,
                message: this.state.message
            }), // body data type must match "Content-Type" header
        });
        //const json = await response.json();
        alert(`Thank you ${this.state.name}. Your message has been sent.`);

        this.setState({
            name: '',
            message: '',
            email: ''
        })
    };

    render() {
        const siteTitle = "MarcoTundo.com";
        const siteDescription = "Marco Domenico Tundo is an award winning Master Engineer and Entrepreneur.";

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h4>February 1st, 2020</h4>

                        <header className="major">
                            <h2>Acadium is building the future of job training for the future of jobs. 🎓</h2>
                        </header>
                        <p>We believe that specific knowledge is what makes people great at what they do, and that by enabling it’s exchange at scale — we can be better equipped to tackle our world's most complex problems head on. Specific knowledge is the byproduct of time, failure and learning.</p>
                        <p>Acadium is a marketplace for remote apprenticeships. We match students (knowledge seekers) with businesses (knowledge givers). Apprenticeships are the medium of exchange for specific knowledge, and are observed across the globe. We’re building Acadium with the goal of unlocking the world’s specific knowledge and accelerating the rate of human progress. While we exist in just one vertical today -- digital marketing, we’re quickly branching out to eventually others to cover all competencies everywhere around the world.</p>
                        <p>My contributions as the technical co-founder to the startup include the architecture, development, deployment and security management of the Acadium web application and mobile apps.</p>
                        <p>My role as Chief Technology Officer, Founder, Lead Full Stack Engineer, and Manager is one of many hats, where I apply my skillset to help grow the company over $3.5M as of 2019 in revenue and exponential scalable growth.</p>
                        <ul className="actions">
                            <li><a href="https://acadium.com?utm_camapaign=marcotundo.com" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section>
                        <Gallery images={DEFAULT_IMAGES.map(({id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>

                    <section id="two">
                        <h2>🛠 Technology</h2>

                        <ul>
                            <li>JavaScript, Python, Bash, YML,</li>
                            <li>Artificial Intelligence, ML, Tensor Flow,</li>
                            <li>MEAN Stack (MongoDB, Express, AngularJS, Node.js),</li>
                            <li>Front End (Flex, SCSS, Gulp),</li>
                            <li>Back End (REST, SSL, NoSQL, MongoDB, Redis, npm, async),</li>
                            <li>3rd Party APIs (Stripe, Slack, GCP, MailGun, Mailchimp, HubSpot, SendGrid),</li>
                            <li>AWS Amazon Web Services (EC2, ELB, Route 53, S3, Code Deploy, Cloud Formation, Code Pipeline, Lambda),</li>
                            <li>Production/Development (Git, Serverless),</li>
                            <li>Mobile Development (React, React-Native, Redux, Firebase).</li>
                        </ul>

                        <ul className="actions">
                            <li><a href="#" onClick={this.handlePortfolio} className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>⏰ Management</h2>

                        <ul>
                            <li>Leads a team of 7 engineers as of Q1 2020,</li>
                            <li>Agile sprints, design/development processes,</li>
                            <li>Events, logistics, business real estate, investments, purchasing,</li>
                            <li>Business operations, human resource,</li>
                            <li>Fundraising, SR&Ed, NRC IRAP, pitching.</li>
                        </ul>

                    </section>

                    <section>
                        <img id="marco" src={marco} alt={'Marco Domenico Tundo'}/>
                    </section>

                    <section id="three">
                        <h2>💾 Ongoing Research</h2>

                        <ul>
                            <li>Augmented and Virtual Reality,</li>
                            <li>Style transfer algorithms,</li>
                            <li>Voice control and custom home automation,</li>
                            <li>Android bootloader and rooting,</li>
                            <li>Cryptographic hashing,</li>
                            <li>Auto modifications and race cars,</li>
                            <li>Mushroom gardening, mycology, cultivation,</li>
                            <li>Gourmet French and Italian cooking,</li>
                            <li>Health sciences and longevity.</li>
                        </ul>

                    </section>

                    <section id="four">
                        <h2>📡 Get In Touch</h2>
                        <p>I am open to questions about my research or business.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)">
                                            <input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
                                        </div>
                                        <div className="6u 12u$(xsmall)">
                                            <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                                        </div>
                                        <div className="12u">
                                            <textarea name="message" id="message" placeholder="Message" rows="4" value={this.state.message} onChange={this.handleInputChange}/>
                                        </div>
                                    </div>
                                    <ul className="actions mt-1x">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        <p>835 Carling Ave.<br />Suite 100<br />Ottawa, ON<br />Canada</p>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +1 (613) 791-9995
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">marco@acadium.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

/*
<Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
    src,
    thumbnail,
    caption,
    description
}))} />
 */

/*
<ul className="actions">
    <li><a href="#" className="button">Full Portfolio</a></li>
</ul>
 */

export default HomeIndex