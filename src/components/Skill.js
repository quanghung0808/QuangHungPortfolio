import React from 'react';
import { Link } from 'react-router-dom';

export default function Skill(props) {
    const skillClass = "circle per-";
    const RenderSkill = () => {
        return (
            <>
                {props.skills.map((item) => (
                    <div>
                        <h3 className="circle-title">{item.name}</h3>
                        <div className={skillClass + item.percent.slice(0, 2)}>
                            <div className="inner">{item.percent}</div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
    return (
        <div class="pp-scrollable">
            <div className="scrollable-content">
                <div className="vertical-centred">
                    <div className="boxed boxed-inner">
                        <section id="skill">
                            <h1 className="title-uppercase ex-title"><span className="text-primary">My </span>Skill</h1>
                            <div className="wrap-circles">
                                <div className="vertical-title  d-none d-lg-block"><span>SKILLS</span></div>
                                <RenderSkill />
                                <div>
                                    <Link className="pn icon" to="/exp-edu">&laquo; Previous</Link>
                                    <Link className="pn icon next" to="/projects">Next &raquo;</Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </div >
    );
}

