import React from 'react'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      Navbar
      <Link to="/profile"><button>Profile</button></Link>
      <Link to="/"><button>Home</button></Link>
    </div>
  )
}