import React from 'react'
import './championList.styles.css'
import { ChampionListItem } from '../championListItem/ChampionListItem'

export const ChampionList = ({list, setChampionFilter, setChampion}) => {
  
  return (
    <main className = 'champion-list-outer-wrapper flex-column'>
      <input className = 'champion-filter' type = 'search' placeholder = 'filter champions'
        onChange = {(e) => setChampionFilter(e.target.value)}
      />
      <div className = 'list-wrapper'>
        {list.map(value => <ChampionListItem key = {value.key} champion = {value} setChampion = { setChampion } />)}
      </div>
    </main>
  )
}