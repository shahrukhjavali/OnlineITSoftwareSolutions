import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Course from './components/courses/course.component';
import NavBar from './components/navigation/navigation.component';
import AboutUs from './components/aboutus/aboutus.component';
import QuickEnquiry from './components/enquiry/quick-enquiry.component';
import Register from './components/register/register.component';
import Home from './components/home/home.component';
import Testimonies from './components/testimonies/testimonies.component';
import TestimonieForm from './components/testimonies/add.testimonies';

const App = () => (
  <>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path='/courses' component = {Course}/>
        <Route path='/aboutus' component = {AboutUs}/>
        <Route path='/enquiry' component = {QuickEnquiry}/>
        <Route path='/register' component = {Register}/>
        <Route exact path='/testimonies' component = {Testimonies}/>
        <Route path='/testimonies/add' component = {TestimonieForm}/>
      </Switch>
    </BrowserRouter>
  </>
)
export default App;
