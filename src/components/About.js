import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
    return (
        <div className="scrollable-content">
            <div className="vertical-centred">
                <div className="boxed boxed-inner">
                    <div className="vertical-title  d-none d-lg-block"><span>ABOUT ME</span></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="experience-box pb-5">
                                    <div className="experience-content">
                                        <div className="experience-number text-texture">About me</div>
                                        <br className="d-block d-sm-none" />
                                        <div className="experience-info">
                                        </div>
                                        <div>
                                            <Link className="pn icon" to="/home">&laquo; Previous</Link>
                                            <Link className="pn icon next" to="/exp-edu">Next &raquo;</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 text-white">
                                <h2 className="title-uppercase"> <span
                                    className="text-primary">Profile</span> Information</h2>
                                <p class="profile-description">- Software Engineering student at FPT University. Seeking an
                                entry-level position as
                                an Front-end Developer.<br />
                                - My greatest passion in life is using
                                my technical know-how to benefit other people and
                                organizations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

