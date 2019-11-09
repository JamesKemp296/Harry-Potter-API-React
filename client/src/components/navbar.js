import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/sort">Movies</NavLink></li>
      <li><NavLink exact to="/cohort">Movies</NavLink></li>
      <li><NavLink exact to="/cohort/:id">Movies</NavLink></li>
    </ul>
  </nav>
)

export default Navbar
