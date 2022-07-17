import React from 'react';
import { Link } from 'react-router-dom';

export default function ExpEdu(props) {
    const RenderResumeExp = ({ category }) => {
        return (
            <div className="resume-content text-white">
                <div className="resume-inner">
                    {props.expedus.filter((expedu) => expedu.type === category).map(filteredExpEdu => (
                        <div className="resume-row">
                            <h6 className="resume-type">{filteredExpEdu.name}</h6>
                            <p className="resume-study">{filteredExpEdu.location}</p>
                            <p className="resume-date text-primary"> {filteredExpEdu.date}</p>
                            {filteredExpEdu.descriptions.map((item) => {
                                return <p className="resume-text">&#8620; {item.description}</p>
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div class="pp-scrollable section-bg bgExpEdu">
            <div className="scrollable-content">
                <div className="vertical-centred">
                    <div className="boxed boxed-inner">
                        <div className="vertical-title d-none d-lg-block"><span>Experience - Education</span></div>
                        <div className="boxed">
                            <div className="container">
                                <div className="row row-resume">
                                    <div className="col-md-6">
                                        <div className="col-resume">
                                            <h4 className="title-uppercase">Education</h4>
                                            <RenderResumeExp category="Education" />
                                            <div>
                                                <Link className="pn icon" to="/about">&laquo; Previous</Link>
                                                <Link className="pn icon next" to="/skills">Next &raquo;</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="col-resume">
                                            <h4 className="title-uppercase">Experience</h4>
                                            <RenderResumeExp category="Experience" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

