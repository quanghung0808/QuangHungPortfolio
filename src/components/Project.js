import React from 'react';
import { Link } from 'react-router-dom';

export default function Project(props) {

    const RenderProjects = () => {
        return (
            <div className="row-project-box row">
                {props.projects.map((item) => (
                    <div className="col-project-box col-sm-6 col-md-4 col-lg-4">
                        <a href={item.source} className="project-box">
                            <div className="project-box-inner">
                                <h5>{item.name}<br />{item.type}</h5>
                                <div className="project-category">{item.category}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="section-bg bgProject">
            <div className="scrollable-content">
                <div className="vertical-centred">
                    <div className="boxed boxed-inner">
                        <div className="vertical-title  d-none d-lg-block"><span>LATEST PROJECTS</span></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="title-uppercase text-white">LATEST <span
                                        className="text-primary">PROJECTS</span></h2>
                                    <RenderProjects />
                                </div>
                            </div>
                            <div>
                                <Link className="pn icon" to="/skills">&laquo; Previous</Link>
                                <Link className="pn icon next" to="/achievements">Next &raquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
