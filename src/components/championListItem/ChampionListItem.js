import React from 'react'
import { Link } from 'react-router-dom'
import './championListItem.styles.css'

export const ChampionListItem = ({champion, setChampion}) => {
  return (
    <div className = 'list-item-wrapper flex-column'>
      <Link to = '/champion' className = 'image-wrapper' onClick = {() => setChampion(champion.id)}>
        <img src = {`http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/${champion.id}.png`} alt = {champion.title}/>
      </Link>
      
      <div className = 'champion-name-wrapper'>
        <div className = 'champion-name'>
          {champion.name}
          <div className='line'></div>
        </div>
      </div>
    </div>
  )
}