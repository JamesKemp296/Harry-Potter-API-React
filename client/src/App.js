import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SortMe from './pages/SortMe'
import CohortList from './pages/CohortList'
import CohortStudent from './pages/CohortStudent'
import Navbar from './components/Navbar'

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sort" component={SortMe} />
      <Route exact path="/cohort" component={CohortList} />
      <Route path="/cohort/:id" component={CohortStudent} />
    </Switch>
  </BrowserRouter>
)

export default App
