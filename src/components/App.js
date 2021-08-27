import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import NotFound from './pages/NotFound';
import BlogItem from './pages/BlogItem';
import ProjectItem from './pages/ProjectItem';

const App = () => {
  return (
      <Router>
        <div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/projects/:projectRoute"
                     component={ProjectItem}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/blog/:blogRoute" component={BlogItem}/>
              <Route exact path="/about-me" component={AboutMe}/>
              <Route exact path="/contact-me" component={ContactMe}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
};

export default App;