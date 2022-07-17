import { Link } from 'react-router-dom';
import React from 'react';

export default function Home(props) {

    return (
        <div className="pp-scrollable section-bg bgWelcome" >
            <div className="scrollable-content">
                <div className="vertical-centred">
                    <div className="boxed boxed-inner">
                        <div className="vertical-title  d-none d-lg-block"><span>WELCOME</span></div>
                        <div className="boxed">
                            <div className="container text-white">
                                <div className="row">
                                    <div className="col-md-8 col-lg-6">
                                        <p className="subtitle-top">Welcome To<br />Quang Hung Portfolio</p>
                                        <h1 className="display-2 text-white"><span
                                            className="text-primary">Hello</span> I am<br /> Quang Hung</h1>
                                        <div>
                                            <Link className="pn icon" to="/about">Next &raquo;</Link>
                                        </div>
                                        {/* <Link to="/about" className="icon ion-ios-play">About me</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}

