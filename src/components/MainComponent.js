import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { ACHIEVEMENTS } from "../shared/achievements";
import { EXPEDU } from "../shared/expedus";
import { PROJECTS } from "../shared/projects";
import { SKILLS } from "../shared/skills";
import About from "./About";
import Contact from "./Contact";
import ExpEdu from "./ExpEdu";
import Achievement from "./Achievements";
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";
import Skill from "./Skill";
import Home from "./Welcome";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    achievements: ACHIEVEMENTS,
    expedus: EXPEDU,
    projects: PROJECTS,
    skills: SKILLS
    }

  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/exp-edu' component={() => <ExpEdu expedus={this.state.expedus}/>} />
            <Route exact path='/skills' component={() => <Skill skills={this.state.skills}/>} />
            <Route exact path='/projects' component={() => <Project projects={this.state.projects}/>} />
            <Route exact path='/achievements' component={() => <Achievement achievements={this.state.achievements}/>} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter((Main));
