import React from 'react'
import './championList.styles.css'
import { ChampionListItem } from '../championListItem/ChampionListItem'
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner'

export const ChampionList = ({list, setChampionFilter, setChampion, isLoading}) => {
  
  return (
    <main className = 'outer-wrapper flex-column'>
      <input className = 'champion-filter' type = 'search' placeholder = 'filter champions'
        onChange = {(e) => setChampionFilter(e.target.value)}
      />
      {isLoading
      ? <LoadingSpinner />
      : <div className = 'list-wrapper'>
        {list.map(value => <ChampionListItem key = {value.key} champion = {value} setChampion = { setChampion } />)}
        </div>
      }
      
    </main>
  )
}