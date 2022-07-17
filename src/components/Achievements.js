import React from 'react';
import { Link } from 'react-router-dom';

export default function Achievement(props) {
    const RenderAchievement = () => {
        return (
            <div className="accordian">
                <ul>
                    {props.achievements.map((item) => (
                        <li>
                            <div className="image_title">
                                <a href={item.href}>{item.name}</a>
                            </div>
                            <a href={item.href}>
                                <img src={item.image} alt={item.name} />
                            </a>
                        </li>
                    ))};
                </ul>
            </div>
        );
    }
    return (
        <div class="pp-scrollable ">
            <div className="vertical-centred">
                <div className="boxed boxed-inner">
                    <div className="vertical-title  d-none d-lg-block"><span>ACHIEVEMENTS</span></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="div-title">
                                    <span className="title-uppercase text-white achievements-title">ACHIEVEMENTS </span>
                                    <Link className="pn icon" to="/projects">&laquo; Previous</Link>
                                    <Link className="pn icon next" to="/contact">Next &raquo;</Link>
                                </div>
                                <RenderAchievement />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}