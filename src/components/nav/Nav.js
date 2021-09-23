import React from 'react'
import { Link } from 'react-router-dom'
import './nav.styles.css'

export const Nav = () => (
  <nav className = 'navigation'>
    <Link to = '/'>
      <div className = 'champion-name'>
        Champions
        <div className='line'></div>
      </div>
    </Link>
    <Link to = '/summoners'>
      <div className = 'champion-name'>
        Summoners
        <div className='line'></div>
      </div>
    </Link>
  </nav>
)