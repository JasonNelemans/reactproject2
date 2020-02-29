import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      Navbar
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="/profile"><button>Profile</button></NavLink>
    </div>
  )
}