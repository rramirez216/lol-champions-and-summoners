import React from 'react'
import { Link } from 'react-router-dom'
import './nav.styles.css'

export const Nav = ({setChampionFilter}) => (
  <nav className = 'navigation'>
    <Link to = '/' onClick = {() => {
      setChampionFilter('')
      }
    }>
      <div className = 'champion-name'>
        Champions
        <div className='line'></div>
      </div>
    </Link>
  </nav>
)